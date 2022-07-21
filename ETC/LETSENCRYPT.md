# 각종 보안 설정 정보&자료

> 드디어 톰캣 서버를 버리고 (?) 윈도우 플랫폼을 버리고 리눅스로 옮겨감.

## iptime 이슈로 인한 인증 불가

- 이제 더이상 https 작업은 안하는걸로
- 어쩔수 없음 개인홈페이지에 궂이 보안을 더 신경 쓸이유가.

## Caddy

- 윈도우에선 443으로 인증이 불가능해서 let's encrypt 매번 실패 했는데 이제는 리눅스니까 편하게 리버스 프록시겸 인증 서버를 만들었다.
- 톰캣 설정은 놔두고 캐디만 추가 해서 적음
- [링크](https://caddyserver.com/download) 에서 캐디 다운
  - 추가적으로 hook.service를 골라야 linux service로 등록하기 편하니 받는게 좋음
  - 개인사용은 무료

  ```bash
    # 압축을 풀고
    tar -xzf caddy*.tar.gz caddy
    # 실행파일을 옮기고
    mv ./caddy /usr/local/bin
    # 실행
    caddy
    # 호스트 네임 등록 (이때 보안 인증 징행됨)
    caddy -host example.com
    # 설정 파일 지정하기 (서비스로 쓰려면 필수적)
    caddy -conf ../path/to/Caddyfile
  ```

  - caddy file example

  ```sh
    ## 왠지 난감하고 힘든 설정들이 있어 보이지만
    proxy from to... {
      policy name [value]
      fail_timeout duration
      max_fails integer
      max_conns in≈teger
      try_duration duration
      try_interval duration
      health_check path
      health_check_port port
      health_check_interval interval_duration
      health_check_timeout timeout_duration
      health_check_contains substring
      fallback_delay delay_duration
      header_upstream name value
      header_downstream name value
      keepalive number
      timeout duration
      without prefix
      except ignored_paths...
      upstream to
      ca_certificates certs...
      insecure_skip_verify
      preset
    }
    ###
    proxy localhost(내부 서버 ip)  hostname(외부 dns)
    #면 간단하게 설정 끝
  ```

  - 이외의 설정은 [링크](https://caddyserver.com/docs)를 참조하자.

## Lets Encrypt for tomcat server

>렛츠 인크립트 사이트 현재 윈도우용으로 따로 진행되는건 없고 또 윈도우용으로 진행중인것은 iis 용 프로젝트들 뿐이다. 따라서 가상 리눅스 or 리눅스에서 작업을 진행해야 함

- [링크](https://letsencrypt.org/)

일단 깃 설치 및 git을 내려받고

```bash
  sudo apt-get install git
  git clone https://github.com/letsencrypt/letsencrypt
```

자바가 있는지 살펴본후 (keytool을 사용해야 하므로 필수) 없으면 설치 커맨드 입력

```bash
  java -version
  sudo apt-get install default-jdk
```

인증서 발급을 수동으로 진행

```bash
  ./letsencrypt-auto certonly --manual
```

인증서 리뉴얼을 수동으로 진행

```bash
  ./letsencrypt-auto renew --manual
```

이때 서버로 특정 주소를 입력하여 특정 스트링을 반환하라는 지시가 나오는데 자신의 서버를 잘 설정하여 만들것. (서버에 따라 다르므로 이부분은 생략하겠다.)

모든것이 정상적으로 진행 되었을 경우
cert1.pem,  chain1.pem,  fullchain1.pem,  privkey1.pem
파일이 자동으로 생성되는데 이파일을 변환 해야 한다. (경우에 따라 다른 이름으로 생성되기도 함 번호가 달라진다던가 없다던가)

- 경로> etc/letsencrypt/archive/{domain}

```bash
openssl pkcs12 -export -in fullchain1.pem -inkey privkey1.pem -out fullchain_and_key.p12 -name tomcat

keytool -importkeystore -deststorepass 패스워드(jks) -destkeypass 패스워드(인증서) -destkeystore 생성파일명.jks -srckeystore fullchain_and_key.p12 -srcstoretype PKCS12 -srcstorepass 패스워드(p12) -alias tomcat

keytool -import -trustcacerts -alias tomcat -file chain1.pem -keystore 생성파일명.jks

```

여기서 생성된 jks 파일을 톰캣 설정에 추가 시켜준다.

```xml
<Connector port="8443" protocol="org.apache.coyote.http11.Http11Protocol" URIEncoding="UTF-8" maxThreads="150" SSLEnabled="true" scheme="https" secure="true" clientAuth="false" sslProtocol="TLS" keystoreFile="jks 파일위치" keystorePass="jks패스워드" keyAlias="tomcat" keyPass="인증서패스워드"/>
```

서버 재실행 이후 수동 발급시 입력한 이메일로 확인 링크가 나오니 링크를 누르면 설정 완료.

- 윈도우실행 인증 [링크](https://github.com/Lone-Coder/letsencrypt-win-simple/releases) 테스트해보지 않았음
- 윈도우실행 인증 api 설명 [링크](https://github.com/Lone-Coder/letsencrypt-win-simple/wiki/How-to-Run) 테스트해보지 않았음

자동화 툴들이 나와있으나 해당 시스템이 아닐경우 도움이 안되므로 참고할것
