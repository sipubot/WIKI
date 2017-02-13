#각종 보안 설정 정보&자료

## Lets Encrypt for tomcat server
  렛츠 인크립트 사이트 현재 윈도우용으로 따로 진행되는건 없고 또 윈도우용으로 진행중인것은 iis 용 프로젝트들 뿐이다. 따라서 가상 리눅스 or 리눅스에서 작업을 진행해야 함
  - [링크](https://letsencrypt.org/)

  일단 깃 설치 및 git을 내려받고
  ```shell
    sudo apt-get install git
    git clone https://github.com/letsencrypt/letsencrypt
  ```

  자바가 있는지 살펴본후 (keytool을 사용해야 하므로 필수) 없으면 설치 커맨드 입력
  ```shell
    java -version
    sudo apt-get install default-jdk
  ```

  인증서 발급을 수동으로 진행
  ```shell
    ./letsencrypt-auto certonly --manual
  ```
  이때 서버로 특정 주소를 입력하여 특정 스트링을 반환하라는 지시가 나오는데 자신의 서버를 잘 설정하여 만들것. (서버에 따라 다르므로 이부분은 생략하겠다.)

  모든것이 정상적으로 진행 되었을 경우
  cert1.pem,  chain1.pem,  fullchain1.pem,  privkey1.pem
  파일이 자동으로 생성되는데 이파일을 변환 해야 한다. (경우에 따라 다른 이름으로 생성되기도 함 번호가 달라진다던가 없다던가)
  ```shell
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
