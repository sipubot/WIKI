# 패턴

메소드나 추상화 기법들.
[디자인패턴 위키](https://ko.wikipedia.org/wiki/%EB%B6%84%EB%A5%98:%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)

## 메소드 패턴

### 메모이제이션 기법

>함수결과를 기록해서 저장해뒀다가 필요하면 바로꺼내서 쓸수있는 방법이다 재귀호출할때 쓰면 편리할것 같지만 잘은 모르겠다... 어쨌건 cpu 성능이 낮고 메모리가 클수록 쓸만한 방법
>
>엄청나게 긴 배열에서 특정 수를 찾을때 indexof 보다 빠르게 찾을수 있었다. (의외라서 놀라움...) 배열의 경우엔 인덱스를 링크드리스트로 해서 시작점과 끝지점을 찾아가지만 오브젝트로 하면 이진트리 구조를 취해서 빨리 찾는 거 같다. (문제는 자료량의 예측이 불가능 할때는 대체로 후자를 쓰는것이 좋지 않나 싶다.)

  ```javascript
  var func = function (a) { ... };
  var a = { func(2) : 44, func(3) : 55, ......};
  ```

### 커링 기법

>함수의 인자를 분리시켜서 중첩함수로 만드는 기법 대체로 들어가는 인자가 같은 타입의 인자이고 반복되는 경우가 많을때 사용하는 것이 좋다.
>
>커링을 사용할때에는 함수가 중첩되므로 어찌보면 메모이제이션의 반대로 메모리가 작고 cpu성능이 월등할 경우에 사용하는것이 좋음.

  ```javascript
  //자바스크립트 프로토 타입
  Function.prototype.curry = function() {
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments);
  var that = this;
  return function() {
      return that.apply(null, args.concat(slice.apply(arguments)));
  };
  }
  ```

### 체이닝 기법

>(빌드패턴과도 유사하다)
>
>메소드 체인 기법이라고 생각해도 될듯.
>
>객체를 리턴해서 객체안에 메소드들을 정의 해주면 된다 메소드의 리턴 역시 객체로
>
>제이쿼리가 체이닝 기법으로 동작하는 대표적인 예

  ```javascript
  var Chain = function () {
    this.aa = function () {
      ...
      return this;
    },
    this.bb = function () {
      ...
      return this;
    }
  };
  ```
