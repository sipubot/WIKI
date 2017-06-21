### 후기
- 역시 손이 느리고 머리가 둔함을 다시 체감.
- 그렇다고 리팩토링을 하지 않지는 않는다.
- 남는건 자기 만족 뿐이겠지만.
- 2번문제는 제외 2번은 딱히 더 심각하게 손댈 필요는 없을듯 싶음

```javascript
//1번 문제 아스키로 그리드를 그려보는 문제 map 안의 if문에서 더 줄여볼수 있을것 같긴한데 아직까지 딱히 떠오르는 방법이 없음
function boxmaker(ArrayData, Row){
  //your code here
  var data = {
    maxDatav : (ArrayData.reduce(function(a, b) {
      return Math.max(a, b);
    })+'').length,
    lastRow : ArrayData.length % Row === 0 ? Row : ArrayData.length % Row,
    RowL : ArrayData.length < Row ? ArrayData.length : Row
  };

  var retText = [];
  var tempText = '';
  ArrayData.map(function (a,i){
    if ( i % Row === 0) {
      if (tempText.length > 0) { retText.push(tempText + '|'); }
      retText.push(AddLine(data.maxDatav, data.RowL));
      tempText = '';
    }

    tempText = tempText + '|' + ' '.repeat(data.maxDatav - (a + '').length) + a;

    if ( i === ArrayData.length - 1) {
      retText.push(tempText + '|');
      retText.push(AddLine(data.maxDatav, data.lastRow));
      tempText = '';
    }
  });

  function AddLine(a, b) {
    return ('+' + '-'.repeat(a)).repeat(b) + '+';
  }

  return retText.join('\n');
}

boxmaker([3,3,3443,343,33332,2],3);


//3번문제 사실 이문제는 답이 틀렸다고 봐도 무방... 검색해보니 jquery차일드를 이용해서 뎁스를 역추적하는 코드가 있었는데 사실 스트링을 분해해서 답을 찾아내고 싶었다.
//생각해보니 클래스라던지 속성값이 있으면 이렇게 분리하면 안되는구나.
//stactoverflow
var l, depth = 0;
$('li:not(:has(ol)):not(:has(ul))').each(function() {
  l = $(this).parents('ul,ol').length;
  if (l > depth)
    depth = l;
});
console.log("Depth : ", depth);

//결국 그나마 해볼만한건 재귀함수로 찾아내는것
function depthCheck(){
  //your code here
  var dataHtml = $('body').find('ol ul');
  var depth = 0;
  $(dataHtml).each(function (a,i) {
    var tempd = find(a, 1);
    if (tempd > depth) {
      depth = tempd;
    }
  });

  function find(a, depthV) {
    if ($(a).find('ol ul').length > 0) {
      find($(a).find('ol ul'), depthV++);
    } else {
      return depthV;
    }
  }

  return depth;
}


```

- 이상 리팩토링및 생각은 종료 (끝난것에 너무 연연하지 말자.)
