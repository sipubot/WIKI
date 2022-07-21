# 책 정리

## tcp/ip ilustrated

>네트워크 관련 책으로 이름이 있는것 같아서 읽는중.

### 개요

- 1960년대 정의 되어 WAN에 쓰이기 시작 현재는 거의 기본프로토콜로 쓰이는중.
- 레이어 시스템 (OSI 계층 일부)
    Application : telnet, FTP, e-mail, etc
    Transport : TCP, UDP
    Network : IP, ICMP, IGMP
    LINK : device driver & interface card
- TCP/IP 레이어
- 인터넷 주소체계 (32bit 아이피 주소)
- DNS (인터넷 string 주소를 ip 주소와 매치 시키는 시스템)
- 캡슐화 (데이터를 어떻게 캡슐화 하는지. TCP, UDP)
- 멀티 플렉싱
- 클라이언트 서버 모델
- 포트 넘버
- 표준절차 (ISOC)
- RFCs
- 표준 심플 서비스 : echo(7), discard(9), daytime(13), chargen(19), time(37)...
- 인터넷
- 적용 (BSD, FTP) 등등
- API 설계
- Test Network

### LINK Layer

- 개요 : IP모델, ARP모듈, RARP모듈, FDDI, RS-232
- 이더넷 IEEE802 :
- Trailer Encapsulation : RFC 893
- SLIP : 시리얼 ip 통신
- Compressed SLIP : 압축 SLIP 통신
