#문서들
  관련 공부한것이나 특별히 적어둘것들을 모아둔곳.
  - [스펙 정리](https://github.com/sipubot/WIKI/blob/master/C%23%20C%2B%2B%20C/SPEC.md)
  - [이슈&버그](https://github.com/sipubot/WIKI/blob/master/C%23%20C%2B%2B%20C/ISSUE%26BUG.md)

##FrameWorks
최근동향의 프레임워크들 생각 무작위 순서


## 비주얼 스튜디오 내장 mvc 프레임워크 관련 (아마도 nuget 이야기가 대부분이겠지.)

### cors 관련 (jsonp) nuget 설치
  - //누겟패키지  
    Install-Package Microsoft.AspNet.WebApi.Cors

  - //Global.asax 에 추가할것
    GlobalConfiguration.Configure(WebApiConfig.Register);

  - //WebApiConfig.cs 수정 (api 전체를 cors 처리 할경우에)
    config.EnableCors();
    config.MapHttpAttributeRoutes();
    config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

  - //각각의 api에서 정의할것
    //클래스정의 위에 노테이션 해야한다. (자바의 노테이션 법칙과 비슷 요즘은 다 이런추세인듯 싶기도 하고.)
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-Custom-Header")]
