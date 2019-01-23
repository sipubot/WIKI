#PA
$TBratio = 0.40;
$SCratio = 0.40;
$BGratio = 0.2;
#GA
$GMratio = 0.7;
$FDratio = 0.3;
$GMpass = 2500;
$FDpass = 50;
#WA
$CWratio = 1;
$LCratio = 10;
$GHratio = 10;

function Tag-List($html, $separatorS, $separatorE) {
    #ex '(?i)<h3[^>]*>(.*)</h3>';
    $pattern = '(?i)'+$separatorS+'[^>]*>(.*)'+$separatorE;
    $result = [Regex]::Matches([string]$html, $pattern)
    return $result;
}
function Get-innerText($node) {
    return $node -replace '<[^>]+>',''
}
#########################
### WA region (Present re calc )
#########################
$WAPoint = 0;
#########################
#codewar
$CWWebResponse = Invoke-WebRequest -UseBasicParsing -Uri https://www.codewars.com/users/sipubot
$CWNodeList = Tag-List $CWWebResponse.Content '<div class="stat"' "</div>" 
$CWsap = "Honor:</b>";
$CWNode = $CWNodeList -split $CWsap
$CWsap = "</div>";
$CWNode = $CWNode[1] -split $CWsap
$CWNode = $CWNode[0].trim()
$WAPoint = $WAPoint + ([int]$CWPoint * $CWratio)
$CWPoint | Out-Default
#########################
#leetcode
$LCWebResponse = Invoke-WebRequest -UseBasicParsing -Uri https://www.leetcode.com/sipubot
$LCsap = '<span class="badge progress-bar-success">'
$LCNodeString =  $LCWebResponse.Content -split $LCsap;
$LCsap = '</span>'
$LCNodeString =  $LCNodeString[2] -split $LCsap;
$LCPoint = ($LCNodeString[0].split('/'))[0].trim()
$WAPoint = $WAPoint + ([int]$LCPoint * $LCratio)
$LCPoint | Out-Default
#########################
#github
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$GHWebResponse= Invoke-WebRequest -UseBasicParsing -Uri https://github.com/sipubot
$GHsap = '<h2 class="f4 text-normal mb-2">'
$GHNodeString =  $GHWebResponse.Content -split $GHsap;
$GHsap = '</h2>'
$GHNodeString =  $GHNodeString[1] -split $GHsap;
$GHsap = "contributions"
$GHPoint = ($GHNodeString[0] -split $GHsap)[0].trim()
$WAPoint = $WAPoint + ([int]$GHPoint * $GHratio)
$WAPoint = [math]::Round($WAPoint,1)
$GHPoint | Out-Default
#########################
### PA region
#########################
$PAPoint = 0;
#########################
#Tumblr 25%
$TBWebResponse= Invoke-WebRequest -UseBasicParsing -Uri https://sipurung.tumblr.com
$TBNodeList = Tag-List $TBWebResponse.Content '<a href="https://sipurung' "</a>"
$TBNodeList = $TBNodeList | Where { $_ -notlike "*img*"} | Select-Object -First 10

$TBPoint = 0;
foreach ($i in $TBNodeList) {
    $TBdate = (Get-innerText $i).split();
    $TBdate = $TBdate -replace "[^0-9]"
    $TBdate = $TBdate[2] + "-" + $TBdate[0] + "-" + $TBdate[1]
    $TBStat = [datetime]($TBdate + " 00:00")
    $TBStat = NEW-TIMESPAN –Start $TBStat –End (GET-DATE)
    $TBStat = $TBStat.Days
    switch ($TBstat)
    {
        {$_ -le 2} {$TBPoint += 100;break;}
        {$_ -le 7} {$TBPoint += 70;break;}
        {$_ -le 14} {$TBPoint += 45;break;}
        {$_ -le 30} {$TBPoint += 20;break;}
    }
}
$TBPoint | Out-Default
$TBPoint = $TBPoint * 0.1;
$PAPoint = $PAPoint + ($TBPoint * $TBratio);
#$PAPoint  | Out-Default
#########################
#Sound-Cloud 25%
$SCWebResponse= Invoke-WebRequest -UseDefaultCredentials -UseBasicParsing -Uri https://soundcloud.com/sipurung-kim 
$SCNodeList = Tag-List $SCWebResponse.Content '<time' "</time>" | Select-Object -Index (1,2,3)

$SCPoint = 0;
foreach($i in $SCNodeList)
{
    $SCstat = [datetime](Get-innerText $i)
    $SCstat = NEW-TIMESPAN –Start $SCstat –End (GET-DATE)
    $SCstat = $SCstat.Days
    switch ($SCstat)
    {
        {$_ -le 2} {$SCPoint += 100;break;}
        {$_ -le 7} {$SCPoint += 80;break;}
        {$_ -le 15} {$SCPoint += 60;break;}
        {$_ -le 30} {$SCPoint += 20;break;}
    }
}
$SCPoint | Out-Default
$SCPoint = $SCPoint * 0.33
$PAPoint = $PAPoint + ($SCPoint * $SCratio);
#$PAPoint  | Out-Default
#########################
#Budget json object parse
$BGParam = @{
    ID = "sipu";
    TOKEN = $HPTOKEN
    RQ = "LIST_EXPENSE"
}
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}
$BGWebResponse = Invoke-RestMethod -UseBasicParsing -Uri https://sipu.iptime.org/Budget/API -Method Post -Body $BGParam
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$false}
$BGTable = $BGWebResponse | Select budget_date, category_name, expense_value | Where-Object { $_.category_name -eq "문화" -or $_.category_name -eq "친교"}
$dayssum = @(0,0,0);
$dayssumratio = @(0.7,0.2,0.1);
foreach($i in $BGTable) {
    $ad = [DateTime]::ParseExact($i.budget_date, "yyyy-MM-dd", $null)
    $spday = NEW-TIMESPAN –Start $ad –End (GET-DATE)
    $spday = $spday.Days
    switch ($spday)
    {
        {$_ -le 3} {$dayssum[0] += $i.expense_value;break;}
        {$_ -le 5} {$dayssum[1] += $i.expense_value;break;}
        {$_ -le 15} {$dayssum[2] += $i.expense_value;break;}
    }
}
for ($i=0; $i -lt $dayssum.Length; $i++){
    switch ($dayssum[$i])
    {
        {$_ -gt 100000} {$dayssum[$i] = 100 * $dayssumratio[$i];break;}
        {$_ -gt 50000} {$dayssum[$i] = 80 * $dayssumratio[$i];break;}
        {$_ -gt 1000} {$dayssum[$i] = 50 * $dayssumratio[$i];break;}
        {$_ -gt -1} {$dayssum[$i] = 30 * $dayssumratio[$i];break;}
    }
}
$BGPoint = $dayssum | Foreach {$t=0} {$t += [int]$_} {$t};
$BGPoint | Out-Default
$PAPoint = $PAPoint + ($BGPoint * $BGratio);
$PAPoint = [math]::Round($PAPoint,1)
#$PAPoint  | Out-Default
#########################
### GA region
#########################
$GAPoint = 0;
#Diet
$DIParam = @{
    ID = "sipu";
    TOKEN = $HPTOKEN
    RQ = "LIST_STATDAY"
}
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}
$DIWebResponse = Invoke-RestMethod -UseBasicParsing -Uri https://sipu.iptime.org/Diet/API -Method Post -Body $DIParam
$day1gm = 0;
$day1fd = 0;
$day2gm = 0;
$day2fd = 0;
$day1 = 0;
$day2 = 0;
foreach ($i in $DIWebResponse) {
    $ad = [DateTime]::ParseExact($i.diet_date, "yyyy-MM-dd", $null)
    $spday = NEW-TIMESPAN –Start $ad –End (GET-DATE)
    $spday = $spday.Days
    switch ($spday)
    {
        {$_ -le 7} {
            $day1 += 1;
            if ($i.sum_gram -gt $FDpass) {
               
            } elseif ($i.sum_gram -gt 0){
                $day1fd += 50;
            } else {
                $day1fd += 100;
            }
            if ($i.exec_sum -gt $GMpass) {
                $day1gm += 100;
            } elseif ($i.exec_sum -gt 0){
                $day1gm += 20;
            }
        }
        {$_ -le 30} {
            $day2 += 1;
            if ($i.sum_gram -gt $FDpass) {
               
            } elseif ($i.sum_gram -gt 0){
                $day2fd += 50;
            } else {
                $day2fd += 100;
            }
            if ($i.exec_sum -gt $GMpass) {
                $day2gm += 100;
            } elseif ($i.exec_sum -gt 0){
                $day2gm += 20;
            }
        }
    }
}
if ($day1 -gt 0) {
    $day1fd = ($day1fd / $day1) * 0.75;
    $day1gm = ($day1gm / $day1) * 0.75;
}
if ($day2 -gt 0) {
    $day2fd = ($day2fd / $day2) * 0.25;
    $day2gm = ($day2gm / $day2) * 0.25;
}
$GMPoint = $day1gm + $day2gm;
$FDPoint = $day1fd + $day2fd;
$GMPoint | Out-Default
$FDPoint | Out-Default
$GAPoint = ($GMPoint * $GMratio) + ($FDPoint * $FDratio);
$GAPoint = [math]::Round($GAPoint,2);
#########################
###Total
#########################
$jsonResult = @{PApoint=$PAPoint; GApoint=$GAPoint; WApoint=$WAPoint};

$jsonResult | Out-Default
#########################
###SendTo result
#########################
$REParam = @{
    ID = "sipu";
    TOKEN = $PUSHTOKEN;
    PAPoint = $PAPoint;
    GAPoint = $GAPoint;
    WAPoint = $WAPoint;
}
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}
$REWebResponse = Invoke-RestMethod -UseBasicParsing -Uri https://sipu.iptime.org/PUSH -Method Post -Body $REParam
$REWebResponse | Out-Default;

