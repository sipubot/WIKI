# DOM 이란 무엇인가

## DOM레퍼런스

>많은 자바스크립트 유저들이 쓰고는 있지만 공부하지 않는 그것 대부분의 웹 개발이나 웹디자이너들이 관심조차 주지 않는것
[DOM 레퍼런스](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 라고 부를 수 있는 것
>
> 일단 영문을 해석해 보자면. 문서의 객체화 형태(모델) 라고 해석할수 있겠다. 말 그대로 xml이든 css든 html 이든 js든 문서(글)을 객체화 시키는 것이다. 각 브라우저마다 이 객체화 형식이 달랐던 (2000년 초반까지) 시기부터 시작된 파편화가 최근에와서는 대부분 통일성을 갖춘 형태로 진화해서 html5를 선언한 지금은 대부분 쓰는 dom 명령어들은 거의 일맥 상통하다. (구버전은 따지지 말자) 내가 주로 쓸것은 dom에서 쓸만한 메소드나 몰랐는데 알아둬야 할것들 정도다.

### 콘솔

>console.log 와 console.dir 콘솔은 말그대로 테스트 콘솔창에 내리는 명령이고 log는 print와 같이 찍어내는 의미로 쓰인다. 대부분의 유능한 이들은 알겠지만 dir명령어는 좋지만 쓰지 않는 경우가 많다. dir의 경우는 로그와는 다르게 해당변수의 값만이 아니라 해당 변수가 가지고 있는 자식 오브젝트(메소드가 될수도 있고 값이 될수도 있다.)를 모두 보여준다. 크롬 개발창에 console.dir(window); 명령을 내려보면 윈도우 객체 안에 (여기서 말한 윈도우는 브라우저 안 하나의 탭안에 나오는 모든  것(문서)들을 의미한다고 생각해도 된다.) 것들을 객체로 출력시켜 준다. 그리고 생각보다 훨씬 많은 dom의 규모를 느낄수 있을것이다. html css js 만으로는 웹페이지 하나를 설명할수 없다. 오히려 웹페이지를 동작시키고 표현하는데엔 dom이 훨씬 더 막중한 위치에 있다고 봐야한다. 콘솔에 대한 이야기를 했으니 콘솔을 보자. console.dir(console); 을 입력했을때 나오는것을 살펴보면 위에 말한 메소드와 추가로 다음의 메소드들이 존재하는것을 알수 있다. log와 dir는 자주 사용하니 그외의 메소드들은 언제 사용하는지 대충 알아보자.

- assert() : 두개의 인자중 앞의 인자가 false를 리턴했을 경우 출력.  (보통의 경우 오류발생시 쓰인다고 생각하는것이 좋다.)
- clear() : 콘솔창을 지우는것.
- count() : 콘솔을 몇번 출력했는지 보여주는것.
- debug() : (로그로 대체되었다 사장메서드)
- dir() : 이미 설명
- dirxml() : 사파리를 제외하고 html/xml의 노드를 오브젝트로 보여주는것
- error() : 로그와 비슷하다.
- info() : 로그와 비슷
- log() : 같은 맥락으로 쓰이고 있음
- table() : 테이블 형태로 출력시켜줌 (배열, 오브젝트)
- time() : 현재시간 출력
- timeEnd() : 시간 출력 유사기능
- timeStamp() : 시간 출력 유사기능
- timeline() : 시간 출력 유사기능
- timelineEnd() : 시간 출력 유사기능
- trace() : 오류스택을 출력시켜준다. (로그저장소를 보여주는것이라고 생각하면 되겠다.)
- warn() : 로그와 비슷 쓸만한 것들은 assert, log, dir, time, trace  log를 쓰기 보다는 dir를 쓰는것이 좋겠다.

### Element (노드 DOM API)

> 노드에 있는 각종 속성값들을 처리하는 메소스 생각 보다 훨씬 많은 메소드들을 제공하고 있다. DOM4 버전으로 넘어오면서 기존의 메소드들을 다 통합해서 쓰는거 같음
>
>많은 메소드들이 사라졌다. JQuery를 쓰지 않아도 될만큼 체계적으로 변화중이다. 브라우저별 지원 하는 부분이 많이 달라서 문게가 많은 부분 .

브라우저별 호환성을 체크하기 위한 [링크](https://developer.mozilla.org/ko/docs/Web/API/Element)

- attributes : 해당노드의 속성값을 NamedNodeMap 객체로 돌려줌 [네임노드맵 객체](https://hunskorea.com/docs/ko/jre/api/plugin/dom/org/w3c/dom/NamedNodeMap.html)
- classList : 클래스 속성값을 리스트로 뽑아 준다. 제이쿼리의 addclass 함수를 생각하면 편할듯. 디테일한 부분에서는 다르긴 함. 자세한 것은 [링크](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- className : 클래스 속성값을 스트링 리턴
- clientHeight : 보더 마진 값 제외한 노드의 실제 높이를 숫자로 리턴
- clientLeft : 보더 마진 포함 노드의 좌측 값 숫자 리턴
- clientTop : 보더 마진 포함 노드의 상방향 값 숫자 리턴
- clientWidth : 보더 마진 값 제외한 노드의 실제 너비를 숫자로 리턴
- id : id값 스트링 리턴
- innerHTML : 노드 안의 내부 노드를 리스트로 리턴
- nextElementSibling : 여러개의 노드들의 차례대로 선택 (거의 쓸모는 없어 보인다)
- outerHTML : 부모 노드가 없을 경우 에러가 나옴 innerHTML과 다르게 자신을 포함한 노드 전체를 수정하게 된다.
- prefix  : 노드의 접두사를 확인한다.
- scrollHeight : 화면에 나오지 않는 전체 영역에 대한 높이값
- tagName : Returns a String with the name of the tag for the given element.
- addEventListener(type, listener, [options]) : 노드에 이벤트 추가하기.
- dispatchEvent() : Dispatches an Event at the specified EventTarget, invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent()
- closest(selectors) :  method returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter. If there isn't such an ancestor, it returns null. //jquery find랑 비슷하다. 하지만 낮은 버전의 브라우저들에서 지원하지 않은 익스플로러 지원하지 않음
- getAttributeNS(namespace, name) : getAttributeNS returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or "" (the empty string); see Notes for details.
- getBoundingClientRect() :  the size of an element and its position relative to the viewport.
- getClientRects() :  collection of rectangles that indicate the bounding rectangles for each box in a client.
- getElementsByClassName(names) :  live HTMLCollection containing all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node.
- getElementsByTagName(tagName) :  live HTMLCollection of elements with the given tag name. The subtree underneath the specified element is searched, excluding the element itself. The returned list is live, meaning that it updates itself with the DOM tree automatically. Consequently, there is no need to call several times Element.getElementsByTagName() with the same element and arguments.
- getElementsByTagNameNS(namespaceURI, localName) :  live HTMLCollection of elements with the given tag name belonging to the given namespace. It is similar to Document.getElementsByTagNameNS, except that its search is restricted to descendants of the specified element.
- hasAttribute(attName) :  Boolean value indicating whether the specified element has the specified attribute or not.
- hasAttributeNS(namespace, localName) :
- matches(selectorString) :  returns true if the element would be selected by the specified selector string; otherwise, returns false.
- querySelector(selectors) : ex> var el = document.body.querySelector("style[type='text/css'], style:not([type])");
- querySelectorAll(selectors) : ex> let matches = document.body.querySelectorAll('p');
- remove() : method removes the object from the tree it belongs to.
- removeAttribute(attrName) : 속성값 제거.
- removeEventListener(type, listener[, options]) : ex> clickTarget.removeEventListener('click', makeBackgroundYellow, false);
- setAttribute(name, value) : 속성값 설정

### Meta programming

> ECMA 6 시작된 이후로 자바스크립트에 메타 프로그래밍이 대세로 전환 됨 함수형 프로그래밍으로 가기 위한 변화들이 있었다.
디자인 패턴을 참조할것.
[링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)
