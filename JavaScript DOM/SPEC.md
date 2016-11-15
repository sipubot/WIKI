# 스펙 정리
(필요하거나 알아야할것들만 전체적 정리는 하지 않기로 그런건 책으로 나와 있으니 혹은 언어개발이 아닌이상 할수도 없고)

# 초급 자바스크립터 들에게 보여주어야할 기초 문서
소개글
[링크](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
자료형
[링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
비교
[링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)

# 자료형 메소드 정리

## Number

### Number.isNaN() **
### Number.isFinite() **
숫자냐아니냐(무한대나 NaN 체크)
### Number.isInteger() *
정수체크
### Number.parseFloat() **
### Number.parseInt() **
### Number.prototype.toExponential() *
익스포텐셜로 변환 (ex> e+11)
### Number.prototype.toFixed() *
소수점 자리대로 변환
### Number.prototype.valueOf()
### Number.prototype.toPrecision()
자리점대 맞춰서 바꾸기
[링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
### Number.prototype.toString() **

## String

### String.prototype.charAt(index) **
인덱스 내에 문자를 리턴.
### String.prototype.charCodeAt(index) **
문자를 해당 아스키(유니) 코드로 리턴해준다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
### String.prototype.codePointAt(index)
charCodeAt과 유사하지만 리턴값이 다르다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
### String.prototype.concat() **
문자열 합치기
### String.prototype.includes() **
해당문자열이 있는지 찾기  endsWith() 메서드도 있다.
### String.prototype.indexOf() **
해당 문자의 인덱스 리턴 (최초) lastIndexOf() 메서드도 있음
### String.prototype.localeCompare()
언어간 비교. (다른 랭귀지를 잘 모르니 의미는 없...)
### String.prototype.match() **
정규표현식 체크
### String.prototype.normalize() **
문자열을 유니코드로 치환
### String.prototype.repeat(times) *
문자열 반복
### String.prototype.replace() **
문자열 치환
### String.prototype.search() *
정규표현식으로 찾기
### String.prototype.slice(begin index, end index) **
문자열 잘라내기 음수는 거꾸로 찾는다.
### String.prototype.split(char) **
문자열 나누기
### String.prototype.startsWith() *
[문서참조](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
### String.prototype.substring(startindex, endindex) String.prototype.substr(startindex, lengthchar)
용법 차이 인지할것
### String.prototype.toLocaleLowerCase()
### String.prototype.toLocaleUpperCase()
### String.prototype.toLowerCase() **
### String.prototype.toUpperCase() **
### String.prototype.trim() **
여백 잘라내기
[문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
### String.prototype.anchor() *
하이퍼링크 객체를 생성시킨다. (DOM 연동)
### String.prototype.fromCharCode()
아스키 코드를 해당 문자로 리턴해준다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

## Boolean

### Boolean.prototype.toString()
문자열로 바꿔줌
### 불런에 대한 사용 문제
[참조문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Function
함수관련 문서들은 반드시 봐야한다.

### Function.prototype.apply() ***
[문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
### Function.prototype.call() ***
[문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
### Function.prototype.bind() ***
[문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## Object

### Object.prototype.valueOf()
Overriding valueOf for custom objects You can create a function to be called in place of the default valueOf method. Your function must take no arguments. Suppose you have an object type myNumberType and you want to create a valueOf method for it. The following code assigns a user-defined function to the object's valueOf method: myNumberType.prototype.value
메소드 체이닝 할때 유용하다. 커링 할때도 쓰고.
### Object.create() **
기존 오브젝트와 동일한 오브젝트를 만든다. (new object와 비슷하다고 볼수 있다.);
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
### Object.defineProperty()  
기본적으로 prototype 과 비슷하지만 약간 다르다 문서 참조할것
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
### Object.freeeze(obj)
객체를 고정 시킨다.
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
### Object.getOwnPropertyDescriptor()
객체의 속성 설명을 리턴
### Object.getPrototypeOf(obj)
객체의 프로토 타입 리턴
### Object.isFrozen(), Object.isExtensible(), Object.isSealed()
프리즈 관련 메소드 세부적인것은 검색
### Object.preventExtensions()
객체 확장 금지(모든것)
### Object.seal()
객체 속성 삭제 금지

## Array

### Array.prototype.reduce() ***
reduce() 메서드는 누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄이는 함수를 적용합니다. loop 문 돌려서 pop 하는것을 하지말라고 만든거 같다. 쓸모 있어 보이니 알아두자.
### Array.prototype.filter() ***
arr.filter(callback[, thisArg])
[스펙문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```javascript
  function isBigEnough(value) {
    return value >= 10;
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
```
### Array.prototype.concat() *
배열을 연결해서 하나의 배열로 리턴 해준다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
### Array.prototype.toLocalString()
지역에 맞는 값으로 리턴
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
### Array.prototype.lastIndexOf()
인덱스 오브의 반대
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
### Array.prototype.forEach() ***
있는걸 잘안써서 적어둔다.
### Array.prototype.entries()
배열을 트리 구조로 만들어 줌 다좋은데 인터넷 익스플로러가 지원하지 않는다. 스펙문서를 보고 폴리필을 해주자.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
### Array.prototype.every() *
배열 전체를 테스트 해서 전체가 참일경우 참 틀릴경우 거짓을 리턴해준다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
### Array.prototype.some() *
배열 전체를 테스트 해서 일부가 맞을경우 참 전체가 틀릴경우 거짓을  리턴해준다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
### Array.prototype.map() **
오브젝트나 배열의 전체를 순회하여 계산혹은 결과 값의 오브젝트나 배열을 리턴한다.
[스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Symbols
ECMA 6에서 도입된 새로운 자료형 자세한 용도는 아직 미확정인 상태

## let 과 const
ECMA 6에서 도입 var 선언에서의 세부적 차이를 주게됨
const는 불변 let은 가변 현재 최신 브라우저에서만 이것을 지원하므로 아직 쓰기에는 시기 상조인 면이 있다.
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)


#저수준에서의 동작관련(내부동작제어)

### ArrayBuffer **
자바스크립트 저수준 배열제어  메모리영역 엑세스를 지원함
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Typed_arrays)
[파일제어](https://developer.mozilla.org/ko/docs/Web/API/FileReader#readAsArrayBuffer())
[이미지제어](https://developer.mozilla.org/ko/docs/Web/API/ImageData)

### 메모리 생존 **
메모리 생존 주기에 대한 정보
null값을 대입하면 가비지 콜렉터가 작동한다.
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

### 스택과 큐 **
관련문서를 꼼꼼히 읽자.
[관련문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)
