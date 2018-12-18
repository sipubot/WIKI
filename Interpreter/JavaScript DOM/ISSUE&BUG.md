# 정리

## 배열 복사하기

>프로토 타입으로 설정해두면 굳이 함수를 만들거나 다시 처리할 필요가 없다.

```JavaScript
  Array.prototype.clone = function() {
    return this.slice(0);
  };
```

## 객체 정의하기

>ES6 문법으로 넘어오면서 객체에 관련한 기능들이 추가 됨. (IOS에서 지원하지 않는 것들이 존재하므로 사용상 유의)

- [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

)

```javascript
// __proto__ 를 사용하기
var obj = {};
Object.defineProperty(obj, 'key', {
  __proto__: null, // 상속되는 속성이 없음
  value: 'static'  // enumerable 불가
                   // configurable 불가
                   // writable 불가
                   // 위의 항목이 기본값으로 설정됨
});

// 명시적으로 정의하기
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// 같은 객체를 재활용하기
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}
// ... 그 이후 사용 ...
Object.defineProperty(obj, 'key', withValue('static'));

// 얼리기(freeze)가 가능하다면 객체의 prototype에 속성을
// 추가하거나 제거하지 못하게 막는다.
// (value, get, set, enumerable, writable, configurable)  
(Object.freeze || Object)(Object.prototype);


var o = {}; // 새로운 객체를 생성한다.

// 데이터 속성기술로 defineProperty를 이용해 속성을 추가한다
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a'속성이 o 객체에 존재하고 값은 37이다

// 데이터 접근기술로 defineProperty를 이용해 속성을 추가한다
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { return bValue; },
  set: function(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' 속성이 o 객체에 존재하고 값은 38이다
// 재정의하지 않는 이상 o.b의 값은 항상 bValue와 동일하다

// 두 가지를 섞어서 정의할 수 없다:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get: function() { return 0xdeadbeef; }
});
// TypeError예외가 발생한다: value키는 데이터기술에서만 나타날 수 있고, get키는 데이터 접근기술에서만 나타날 수 있다.

var o = {};
Object.defineProperty(o, 'a', { value: 1, enumerable: true });
Object.defineProperty(o, 'b', { value: 2, enumerable: false });
Object.defineProperty(o, 'c', { value: 3 }); // enumerable의 기본값은 false
o.d = 4; // 기존 방식으로 키를 설정하여 생성하는 경우, enumerable의 기본값은 true

for (var i in o) {
  console.log(i);
}
// 'a', 'd' 출력 (순서는 무작위)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false

var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', { configurable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { set: function() {} }); // throws a TypeError (set은 이전에 undefined였음)
Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (새로운 get이 완전히 동일하다 할지라도 예외발생)
Object.defineProperty(o, 'a', { value: 12 }); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // 아무일도 안일어남
console.log(o.a); // logs 1

var o = {};

o.a = 1;
// 위의 표현은 아래와 같다:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});


// 만약 다음과 같이 표현한다면,
Object.defineProperty(o, 'a', { value: 1 });
// 아래의 의미를 지니게 된다:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```
