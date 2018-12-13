# pop3 메일 시스템

>업무상으로 공부해야 할 일이 생겨서 공부도 할겸 정리도 할겸 적기

## RFC 1939

- [pop3 command](http://www.networksorcery.com/enp/protocol/pop.htm)
- [참고예제](https://github.com/foens/hpop/tree/master/OpenPopExamples)

## POP3 Client

>메일 조회를 위한 프로토콜중 하나

### 프로토콜 개념

- tcp, port를 이용해 스트림으로 연결 통신 (일반적인 소켓 통신을 생각하면 될것 같다. 어떤 포트를 쓰냐가 관건) 
- 기본적인 명령어로 인증 함 (APOP이라는 개념도 도입되었는데 이부분은 세부적인 설명 필요)
- 줄바꿈으로 명령어 실행이 완료되고 '\n' 리턴되는 값들은 행단위로 끝줄에 '+OK','-ERR'가 붙어서 리턴


- 기본적인 명령어 셋 
```pop3
  USER ''     'user_id'
  PASS ''     'password'
  TOP num     '메일 헤더 + num 수만큼의 본문행 가지고 오기'
  STAT        '메세지 수(번호)' + 사이즈 리턴
  LIST        '메세지
  RETR num    '메세지 헤더 본문 조회'
  DELE num    '메세지 삭제'
  RSET        '스트림 접속이후의 모든 삭제 행동의 취소'
  QUIT        '접속 종료'
  UIDL num    '메세지 고유 ID 리턴'
  APOP name digest  '로그인 상태 리턴'
```

- APOP에 대한 추가적인 개념 설명 

> user + pass 명령을 같이 실행하는 개념으로 생각하면 됨 pass는 인코딩 되어 (보통은 해새값을 던진다) 한번 인증 되면 ip와 포트로 인증상태를 유지받을수 있음 보안적인 측면에서 유리

### 실제 사용례

>물론 기본적인 명령어들로만 pop3서버를 사용하진 않는다. 간단히 스트링 처리로 메일을 주고 받기엔 각국의 언어도 다양하며 여러가지 파일이나 문서 html등이 오가기 때문에 여러가지 처리 모듈이 생겨나 있다. 기본적으로 MIME 이라고 통칭되는 인코딩 디코딩 규약을 가지고 데이터를 재조립 한다.

- 메시지 예

[예제](https://www.codeproject.com/Articles/404066/Understanding-the-insides-of-the-POP-mail-protoco)

```pop3
-------- header
  Received: from XXXX: [228.223.2.2]
  Date: Mon, 2 2020 00:xx: + 0900
  From: xxx@xxx.com
  Subject: Test
  Contant-Transfer-Encoding: Quted-Printable
  Mime-Version: 1.0
  Reply-To: xxx@xxx.xcom
  X-Priority: 3
  To: xzxz@xxzx.com
  Content-Type: text/html; charset="utf-8"
-------- header end
=3r=r3=23=3r=....'CRLF'
=3r=r3=23=3r=....'CRLF'
=3r=r3=23=3r=....'CRLF'

. -> last line is '.'+'줄바꿈'

```
>다음과 같은 데이터가 바이트 스트림으로 넘어오게 되고 해당 데이터는 바이트로 읽어서 처리됨 기본적으로 헤더는 ASCII 코드로 쓰여있지만 메일 주소나 제목등의 데이터는 인코딩되어 있을 경우가 존재 (다국어) 따라서 해당 데이터도 디코딩 되어야 할 필요가 있음


## MIME

>메일 해석을 위한 라이브러리 개념 실제적으로 인터넷 그리고 파일 시스템상의 모든 미디어 타입이라고 생각해도 됨

[자료](https://ko.wikipedia.org/wiki/MIME)
인코딩 값으로 ascii 코드를 번역 혹은 해당하는 값으로 ascii 코드를 디코딩한다. 다음과 같은 종류가 있음

### 인코딩 규약들

- 7bit
- quoted-printable
- base64
- 8bit
- binary

헤더는 무조건 ascii 코드로 적혀 있어야 한다는 원칙은 있으나 다음과 같이 예외를 둔다.

위키의 내용
  ```
  encoded-word의 형식: "=?문자셋?인코딩 방식?인코드된 데이터?=".

  문자셋은 보통 utf-8을 사용한다. 하지만 IANA에 등록된 어떤 문자셋도 사용 가능하다.
  인코딩 방식은 quoted-printable 인코딩 방식과 비슷한 Q-encoding 방식을 나타내는 "Q"나 base64 인코딩을 나타내는 "B" 중 하나를 사용할 수 있다.
  인코드된 데이터는 인코딩 방식에 의해 변환된 데이터이다.
  Q-encoding과 quoted-printable의 차이

  RFC 2047에 따르면, encoded-word는 공백 문자(white space)를 포함해서는 안 된다. 따라서 ASCII 코드로 20h(iso-8859-1에서의 스페이스)인 문자는 인코딩을 거쳐야 한다. ASCII 20h(20h가 공백이 아닐지라도)인 문자는 보통 "_" 문자(ASCII 5Fh)로 변환한다. 공백을 "=20"으로 인코딩한 것보다 이 방식이 인코드된 데이터의 가독성을 높여준다.

  예를 들어,

  Subject: =?utf-8?Q?=C2=A1Hola,_se=C3=B1or!?=

  위 문장은 "Subject: ¡Hola, señor!"를 인코딩한 데이터이다.

  encoded-word 형식은 헤더 이름에는 사용할 수 없다. 헤더 이름은 항상 US-ASCII로 표현해야 한다.
  ```
  
  ### Multipart 메시지
  
  > 위키를 참조 하여 확인할것 첨부자료등을 처리 할때 사용하며 대부분은 바이트 단위로 처리하여 (4096 윈도우 기본 데이터 바이트 단위) 파일로 변환 시키게 된다.
