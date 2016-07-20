# 스펙 정리 (필요하거나 알아야할것들만 전체적 정리는 하지 않기로 그런건 책으로 나와 있으니 혹은 언어개발이 아닌이상 할수도 없고)

## Object.prototype.valueOf()

Overriding valueOf for custom objects You can create a function to be called in place of the default valueOf method. Your function must take no arguments. Suppose you have an object type myNumberType and you want to create a valueOf method for it. The following code assigns a user-defined function to the object's valueOf method: myNumberType.prototype.value 메소드 체이닝 할때 유용하다. 커링 할때도 쓰고.

## Array.prototype.reduce()

reduce() 메서드는 누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄이는 함수를 적용합니다. loop 문 돌려서 pop 하는것을 하지말라고 만든거 같다. 쓸모 있어 보이니 알아두자.

## String.prototype.charCodeAt()

문자를 해당 아스키 코드로 리턴해준다. [스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

## String.prototype.fromCharCode()

아스키 코드를 해당 문자로 리턴해준다. [스펙문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

## Array.prototype.filter()

arr.filter(callback[, thisArg]) [스펙문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
  function isBigEnough(value) {
    return value >= 10;
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
```