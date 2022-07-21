# 문서들

  관련 공부한것이나 특별히 적어둘것들을 모아둔곳.

- [스펙 정리](/Interpreter/JavaScript%20DOM/SPEC.md)
- [이슈&버그](/Interpreter/JavaScript%20DOM/ISSUE%26BUG.md)
- [DOM정리](/Interpreter/JavaScript%20DOM/DOM.md)

## Plug-in

- [UnderScore](http://underscorejs.org/) : 유용한 메소드들을 정리해놓은 플러그인 사실 이정도 메소드들이면 프론트에서 쓰이는 왠만한 메소드들은 다 구현했다고 봐도 무방하다. 메소드들은 한번씩 훑어보는걸 추천
- [Jquery](http://jquery.com/) : 말해 무엇하는 최강의 플러그인... 사실 이녀석 덕분에 dom api를 사용할 필요가 없을 정도지만 그래도 기본 동작에 대한 이해가 있어야 플러그인을 쓰는 의미가 있다. 성능향상을 위해서 가려서 써야하는것들은 무조건 체크해둘 필요가 있음.

## FrameWorks

  최근동향의 프레임워크들 생각 무작위 순서

- Vue : json <-> html namespace  인데 워낙 이런 프레임 워크는 많아서. 글세...
- Knockout : json <-> html namespace 이건 좀 재밌는게 data 속성값을 사용해버려서 html 자체의 오류는 없을것 같다. 차라리 이쪽을 추천하고 싶네
- Ember : 여기저기서 추천이 꽤 있는데 이놈도 마찬가지로 html5 정식 문법에는 위배된다. (물론 자바스크립트를 거치고 나면 정상화 되지만)
- Meteor : 서버사이드와 클라이언트 사이를 메우는 프레임워크.. 문법은 역시나 상동한 편인데. 역시나 비추.. 이거랑 jsp는 다를게 별로 없음.
- BackBone : 이 프레임워크의 시조격인거 같은데 엄청난수의 예제와 실사용.... 언더스코어 제이쿼리등의 호환성... 이놈은 jsp asp 문법을 꽤 많이 차용함.. 또하나의 장점이 있다면 역시나. api 호출에 최적화 시켜놔서 데이터 바인딩이 무지하게 편리해 보임.. (물론 이놈도 html 5 기본 문법에는 어긋나 있음.) 편하게 하고 싶으면 이거 추천하고 싶네... 나는 물론 안씀.
- Angular : 구글 느님이 만들어 뿌리신 js 프레임워크 이쪽이 원조인듯 함.. 이쪽은 정교한 맛이 있다 구글느님때문에 함수 api도 정갈한 편이지만 역시나 html 문법 이탈되는 부분이 있음.(버전업 하면서 바꾼듯 싶다. 역시구글) 넉아웃 백본 다음으로 추천해봄직 함
  - 왜 리액트는 안쓰냐고 묻냐면 어 그거 쓸바엔 앵귤러 그냥 쓰세요 백본도 좋고. (나는 페북을 싫어함.)
- 이상 추천한 세가지 프레임워크 링크를 걸어둔다. 자세한 분석은 다시 추후에.
  - [Knockout](http://knockoutjs.com/)
  - [Angular](https://www.angularjs.org/)
  - [Backbone](http://backbonejs.org/)

## IDE 셋팅

  윈도우 환경 기준 (visual studio code)
  
- nodejs 다운 받아 설치하기
- nodejs visual studio run time enviroment (설치는 안해도 되지는 모르겠음)
- 추가 확장 설치 : javascript es6 snippets, Eslint
- JS 소스 파일이 있는 곳에서 실행 하면 가능

    ```cmd
      node <filename.js>
    ```

## three js

- 이제는 하나의 플랫폼으로 봐야할 정도로 많이 성정 한듯
- [슬라이드로 공부](http://davidscottlyons.com/threejs-intro/)
- 3D 그래픽 관련해서는 가장 잘 설명 되어 있는 거 같음 기초적인 부분도 다 나와 있음

## konva js

- canvas용 프레임 워크 하나를 찾다가 선택 나쁘지 않아 보임
- fabric도 고려 해봤는데 파티션 나눠진게 별로다 D3가 그렇게 망했지.
- 어쨌든 konva를 이용한 무언가를 하나 하려고 한다.

## 책관련 잡담

뭐 대부분 책을 이야기 하면 동물사전을 (오라일리) 이야기 하는데 코뿔소와 나비가 꽤 유명하다. 대부분 코뿔소를 들고 다니면서 공부하던데 개인적으론 나비가 더 좋다.
뭐 중상급자를 위한 책이니 그럴수도 있겠다 싶지만. 여하튼 나비책에는 첫부분에 자바스크립트 언어의 정수가 담겨있다. 이부분을 이해하면 아마 brainfuck 같은 괴랄한 언어가 왜 등장했는지 이해를 할지도.
