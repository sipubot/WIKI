$jsonResultFile = "C:\LOCALROOT\Result.json";

get-host
#codewar
$CWWebResponse= Invoke-WebRequest -Uri  https://www.codewars.com/users/sipubot
$CWStat = $CWWebResponse.ParsedHtml.body.getElementsByTagName('div') |
    Where {$_.getAttributeNode('class').Value -eq 'stat'}

$CWPoint = $CWStat.innerText -Like "*Honor:*"
$CWPoint = ($CWPoint.split(':'))[1].trim()
#$CWPoint | Out-GridView

#leetcode
$LCWebResponse= Invoke-WebRequest -Uri  https://www.leetcode.com/sipubot
$LCStat = $LCWebResponse.ParsedHtml.body.getElementsByTagName('li') |
    Where {$_.getAttributeNode('class').Value -eq 'list-group-item'}

$LCPoint = $LCStat.innerText -Like "*Solved Question*"
$LCPoint = ($LCPoint.split('/'))[0].trim()
#$LCPoint | Out-GridView

#github
$GHWebResponse= Invoke-WebRequest -UseBasicParsing -Uri https://github.com/sipubot
$GHhtml = new-object -ComObject "HTMLFile"
$GHhtml.IHTMLDocument2_write($GHWebResponse.rawcontent)
$GHStat = $GHhtml.all.tags('h2') |
    Where {$_.getAttributeNode('class').Value -eq 'f4 text-normal mb-2'}

$GHPoint = $GHStat.innerText -Like "*contributions in*"
$GHPoint = ($GHPoint.split(' '))[0].trim()
#$GHPoint | Out-GridView

$jsonResult = @{codewar=$CWPoint; leetcode=$LCPoint; github=$GHPoint};
$jsonResult | ConvertTo-Json -depth 100 | Out-File $jsonResultFile