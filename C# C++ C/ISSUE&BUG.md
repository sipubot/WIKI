# 정리

##aspx 관련 정리

### 시작 메소드는 자체정의되어있음
  ```
  protected void Page_Load(object sender, EventArgs e)
  {
  }
  ```
### 글로벌 변수는 반드시  초기값을 부여할것.


## 비주얼 스튜디오 내장 mvc 프레임워크 관련 (아마도 nuget 이야기가 대부분이겠지.)

### cors 관련 (jsonp) nuget 설치

- //누겟패키지

  ```pm
  Install-Package Microsoft.AspNet.WebApi.Cors
  ```

- //Global.asax 에 추가할것

  ```c#
  GlobalConfiguration.Configure(WebApiConfig.Register);
  ```

- //WebApiConfig.cs 수정 (api 전체를 cors 처리 할경우에)

  ```c#
  config.EnableCors();
  config.MapHttpAttributeRoutes();
  config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
  ```

- //각각의 api에서 정의할것 //클래스정의 위에 노테이션 해야한다. (자바의 노테이션 법칙과 비슷 요즘은 다 이런추세인듯 싶기도 하고.)

  ```c#
  [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-Custom-Header")]
  ```

### 데이터베이스 마이그레이션 하기.

- //PM 창에서 실행 (generation code)
  ```
  Enable-Migrations -ContextTypeName [마이그레이션할 컨텍스트 ex> ApplicationDbContext] -MigrationsDirectory [마이그레이션파일을 생성할 디렉터리와 콘텍스트명 ex> Migrations\ApplicationDbContext]
  Add-Migration -ConfigurationTypeName [프로젝트네임스페이스].Migrations.ApplicationDbContext.Configuration "InitialDatabaseCreation"
  Update-Database -ConfigurationTypeName [프로젝트네임스페이스].Migrations.ApplicationDbContext.Configuration
  ```
