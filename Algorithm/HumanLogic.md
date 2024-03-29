# 컴퓨터와 개발자

- 여러 개발관련 사이트나 책자에 나와 있는 싱글톤 패턴, 팩토리 패턴 같은 것을 적는 것이 유효한가 고민이다. (어짜피 머리에 잘 들어오지도 않고) 특히나 몇몇 패턴은 개인적인 시각에서는 차이점이 느껴지지 않는 패턴인거 같기도 하고 각각의 패턴에서 결국 1순위를 무엇으로 잡느냐가 그 패턴의 핵심인 것 같다. (이를테면 싱글톤은 로직우선이다. 객체를 중요시 여기는건 빌드나, 데코레이션 같은 것들 이겠다. 그런 생각들을 이어 하다가 글주제를 약간 틀었다.
- 좀더 포괄적인 의미에서 패턴을 말하자면
  - 변수'형' 은 변하지 않아야 하고 (객체에서는 좀더 강하게 제한된다 애초에 프로그램 정의에서 그렇게 하게끔 유도하고 있고)
  - 메서드 함수는 몇가지 형태로 로직 실행(main 함수나 process), 형 변환(convert), 상태변환(value change) 로 한정적으로 사용되고 각각의 동작은 최대한 분리시키고
  - 객체는 최대한 공통부분과 세부부분을 분리 시켜서 재사용성을 늘리고 각각의 값은 일반적인 값을 넣되 예외적으로 상속값을 인정한다 (객체에 메서드를 넣기도 하는데 이경우는 대부분 객체자신의 값을 변형하거나 리턴하는 용도지 그 이상의 메서드를 만들지는 않는 것 같다.)
- 개인프로젝트를 다시 시작하며 생각하는 것들.
  - 인간은 굉장히 시각에 의존을 많이 하고 있다. 하지만 청각을 상실하면 시각 자체의 일부를 잃어버린다. 물론 어느정도의 촉각으로 대체한다. 촉각은 가장 근원적인 의사소통도구이자. 언어임을 깨닫는다. 충분히 인간은 음성과 시각 운동으로 의사소통이 가능함을 알고 있지만 여전히 키보드가 가장 빠른 의사소통 도구인것을 상기해 보자 (음성통화가 가장 빠르다고 여길지 모르겠지만 어디까지나 시각화 된 압축어임을 상기할때 촉각을 넘어설지 모르겠다.)

## 관심의 분리

> 기존의 프로그래밍 관련 사이트 패턴에서 나오는 내용과 많이 다르므로 주의 할 것 개인적 사견도 많음
>
> 결국 코드덩어리도 기계어로 번역 되면 트랜지스터 전기신호가 되는 것이라 (컴퓨터 언어 철학도 있는걸로 아는데 너무 깊이 갈 생각은 없고) 결국 인간이 쓰는 말을 기계어로 번역 하는데 어떤 관점으로 설계하냐들이 정형화 된게 결국 패턴이다.
>
>그래서 개인적인 관점에서 어떻게 언어에서 무엇을 어떻게 관점 분리 시켰나를 적어보자.

- 다 적고 나니 순서대로 점점 인간의 관점에 가까워 지는 느낌이다. 어쨌든 이부분은 좀더 심화 시켜서 적는 것으로 하고 초안을 작성한것으로.

### 상수

- 컴퓨터 언어에서 가장 중요한 상수는 0, 1 이다. 자연세계로 변환도 가능하며 (트랜지스터의 상태값) 이 상수값으로 모든 언어의 토대를 만든 셈이다.
- (추상)시작과끝 : 32bit 64bit 하는 것들 문서든 bit 든 시작과 끝이 구분 되어야 한다 좀더 컴퓨터 공학적인 의미라면 메모리 참조 주소는 시작과 끝이 분명히 존재하고 상수 여야 한다.
- 정의형 : 변수를 선언하거나, 함수를 선언 하거나, 식을 실행하거나 하는데 쓰이는 (예약어라고도 한다) 것들은 적어도 설계한 언어안에서 상수(불변)값이다.

### 구조

- 실행 구조 : 깊게 보면 언어 설계, 프로그램 단계에서 보자면 프로그램을 실행시키게 만드는 구조들을 말한다. (무슨 패턴을 썼든간) 실행된 값과 돌려준 값들을 어떻게 구성하고 변수들을 어떻게 정의하냐 등등. 이 부분에서 요즘 언어의 변화가 심한 편이다.(함수형이니 뭐니) 상수는 (숫자, 문자, 배열, on off 같은 기본적 자료형에서 큰 변혁은 아직 없다. 물론 다양한 자료형이 존재하나 객체라는 이름으로 대부분 변형을 거친다)
- 자료 구조 : 각각의 정보를 어떻게 연결 하냐의 이야기 앞서 적은 배열이라던지 , 이진 트리, b트리, 그래프 같은 자료구조에 대한 내용들이 있다. 여러가지 많은 자료 구조들이 등장하고 있으나 물리적인 성능과 연계 된것들이 많아서 순식간에 유행이 바뀌지는 않는다. 어떻게 보면 메모리 접근법 이라고 이해해도 무방하다.

### 정의

>추상화 (개인적으로 추상화란 말을 싫어하는데) 같은 개념으로 봐도 될듯 싶다. 위의 두가지는 언어 개발자나 코어 개발자들이 주로 연구하는 것이라면 이후의 내용은 실질적으로 제품단계에서 개발자들이 연구하는 것들

- 자료의 정의 : 요즘은 시들해진 OOP에서 많이 다루는 것들 Domain 이라고 해서 OOP의 확장 개념으로 발전하기도 했다. 어쨌든 공통의 자료형이 있다면 스펙 문서가 줄어드니 편리해지는건 사실이다.
- 논리의 정의 : 실질적으로 코드를 짜는 부분이라고 할 수도 있고 세도코드(이걸 왜 그리 부르나는 잘 모르겠다만) 혹은 순서도를 그리는 부분이라고 봐도 되겠다.

### 실행

> 이게 왜 문제 될까 싶을 수도 있으나 세상에는 많은 전자 기기들이 존재하고 그것들이 모두 같은 언어로 동작하지도 않고 같은 스펙이 아니므로 이부분도 사실 엄청 중요하다 물론 이부분은 대체로 직업군으로 갈려서 사람들이 이게 관점에 포함 되나 싶기도 하겠다.

- 효율 : 코드를 바로 실행할것이냐 기계어로 번역할것이냐의 싸움은 여전히 이어지고 있다. (컴파일러와 인터프리터 두개의 언어로 갈리는 것과, 메모리 가비지나 가상 머신 등등)
- 용량 : 가상 머신이든 코드든 실행할수 있는 크기는 중요하다. 알다시피 64kb 메모리에 쓰여진 프로그램으로 우주선이 날아다닌다. 용량은 가볍게 볼 문제도 아니다.
- 안전(환경) : 이 코드로 무엇을 움직일것인가도 중요하다. 대체로 개발자들이 가장 중요하게 다루는것은 '돈' 정도일 것이다. 물론 목숨이나 더 중요한(배나 비행기같은) 것들을 다루는 개발자들도 있을것이다. 그래서 환경도 중요한 관심사이나. 대부분의 개발자는 고려하지 않는다. (이미 충분히 분리되어있다고 봐야 하나..)
