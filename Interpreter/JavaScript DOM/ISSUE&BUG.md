#정리

##배열 복사하기
프로토 타입으로 설정해두면 굳이 함수를 만들거나 다시 처리할 필요가 없다.
```JavaScript
  Array.prototype.clone = function() {
  	return this.slice(0);
  };
```
