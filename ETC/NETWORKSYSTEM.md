# SPEC 정리

네트워크 시스템을 정리해보자. 흔히 아는 osi 부터 세부적인 스펙까지 공부해가며 정리하기로 한다. 차라리 보안쪽을 좀더 중점으로 정리하는게 나으려나... 그렇게 되면 통신 스펙을 따로 정리해야 할지도.. 뭔가 많은걸 한곳에 몰아서 적은 느낌..

## 톰캣 8 설정
파일 압축
```xml
<Connector port="" protocol="HTTP/1.1"
    compression="on"
    compressionMinSize="2048"
    noCompressionUserAgents="gozilla, traviata"
    compressableMimeType="text/html,text/xml,text/css,text/javascript" />
```
캐시 설정
```xml
<filter>
 <filter-name>ExpiresFilter</filter-name>
 <filter-class>org.apache.catalina.filters.ExpiresFilter</filter-class>
 <init-param>
    <param-name>ExpiresByType image</param-name>
    <param-value>access plus 2 weeks</param-value>
 </init-param>
 <init-param>
    <param-name>ExpiresByType text/css</param-name>
    <param-value>access plus 2 weeks</param-value>
 </init-param>
 <init-param>
    <param-name>ExpiresByType application/javascript</param-name>
    <param-value>access plus 2 weeks</param-value>
 </init-param>
 <init-param>
    <param-name>ExpiresByType application/json</param-name>
    <param-value>access plus 0 seconds</param-value>
 </init-param>
</filter>
<filter-mapping>
 <filter-name>ExpiresFilter</filter-name>
 <url-pattern>/*</url-pattern>
 <dispatcher>REQUEST</dispatcher>
</filter-mapping>
```

캐시 설정
```xml

```
