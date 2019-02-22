###naver
$ntesturl = "https://datalab.naver.com/keyword/realtimeList.naver?where=main";
$nres = Invoke-WebRequest $ntesturl;
$listitem = $nres.AllElements | Where-Object {
    $_.class -match "rank_inner"
};

$all = $listitem | Where-Object { $_.'data-age' -match "all"};
$lv1 = $listitem | Where-Object { $_.'data-age' -match "10s"};
$lv2 = $listitem | Where-Object { $_.'data-age' -match "20s"};
$lv3 = $listitem | Where-Object { $_.'data-age' -match "30s"};
$lv4 = $listitem | Where-Object { $_.'data-age' -match "40s"};
$lv5 = $listitem | Where-Object { $_.'data-age' -match "50s"};

$all = $all.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};
$lv1 = $lv1.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};
$lv2 = $lv2.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};
$lv3 = $lv3.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};
$lv4 = $lv4.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};
$lv5 = $lv5.innerHTML -split '"title">' | ForEach-Object { ($_ -split '</span>')[0]} | Where-Object { $_ -notmatch '<span'};

### daum
$dtesturl = "https://www.daum.net";
$dres = Invoke-WebRequest $dtesturl;
$daumList = $dres.AllElements | Where-Object {
    $_.class -match "txt_issue";
} | ForEach-Object { $_.innerText } | Select -Unique;

