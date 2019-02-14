# BOM 이란 무엇인가.

>Browser Object Model.

## 브라우저별 특징

>사실 브라우저 별 특징이라기 보다는 요즘은 웹엔진에 따른 특징으로 나누는 것이 좋다. 대체로 웹킷 엔진과 게코엔진으로 나뉘어진 상황이고 익스플로러는 독자적인 BOM을 구축하고 있다. 이러니 저러니 해도 ECMA 표준이 꾸준히 이어지고 있어서 갈수록 통합되어가고 있다고 봐도 무방

### 실제로 해당 사이트가 https 프로토콜로 (서명된) 통신하고 있는지 체크

내장 함수 만약 서명기한이 지나거나 서명되지 않은 https 일경우 false 리턴
>지원되는 브라우저는 mdn [참조](https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext)
```javascript 
  // 브라우저 사이트 ssl 체크 관련
  var isSSL = window.isSecureContext;
  // 
```
