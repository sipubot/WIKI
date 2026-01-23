# 애플리케이션 보안 (Application Security)

## 개요
Let's Encrypt 외에 포괄적인 보안 지식을 구축하세요. 현대 애플리케이션의 보안은 개발 프로세스의 핵심 요소입니다.

## 보안의 기본 원칙

### CIA 트라이어드
- **기밀성 (Confidentiality)**: 권한 없는 접근 방지
- **무결성 (Integrity)**: 데이터 변조 방지
- **가용성 (Availability)**: 서비스 지속적 접근 보장

### 제로 트러스트 모델
- **항상 검증**: 모든 접근 요청 검증
- **최소 권한**: 필요한 최소 권한만 부여
- **암시적 신뢰 없음**: 네트워크 위치에 기반하지 않음

## 웹 애플리케이션 보안

### OWASP Top 10
1. **Injection**: SQL, NoSQL, OS 명령어 인젝션
2. **Broken Authentication**: 세션 관리 취약점
3. **Sensitive Data Exposure**: 민감 데이터 노출
4. **XML External Entities**: XXE 공격
5. **Broken Access Control**: 접근 제어 실패
6. **Security Misconfiguration**: 보안 설정 오류
7. **Cross-Site Scripting**: XSS
8. **Insecure Deserialization**: 역직렬화 취약점
9. **Vulnerable Components**: 취약한 컴포넌트 사용
10. **Insufficient Logging**: 로깅 및 모니터링 부족

### 방어 전략
- **입력 검증**: 모든 입력 데이터 검증
- **출력 인코딩**: XSS 방지를 위한 적절한 인코딩
- **인증 및 권한 부여**: JWT, OAuth, RBAC 구현
- **암호화**: 전송 중 및 저장 중 데이터 암호화

## 인프라 보안

### 네트워크 보안
- **방화벽**: 트래픽 필터링
- **VPN**: 안전한 원격 접근
- **DDoS 보호**: 분산 서비스 거부 공격 방어

### 컨테이너 보안
- **이미지 스캔**: 취약점 검사
- **런타임 보호**: 컨테이너 격리
- **시크릿 관리**: 민감 정보 안전한 저장

### 클라우드 보안
- **IAM**: 신원 및 접근 관리
- **네트워크 분리**: VPC, 서브넷 설계
- **암호화**: 데이터 암호화 (KMS)

## 암호화 기법

### 대칭키 암호화
- **AES**: 고급 암호화 표준
- **사용 사례**: 대용량 데이터 암호화

### 비대칭키 암호화
- **RSA**: 공개키 암호화
- **ECC**: 타원 곡선 암호화
- **사용 사례**: 키 교환, 디지털 서명

### 해시 함수
- **SHA-256**: 안전한 해시 알고리즘
- **bcrypt/scrypt**: 패스워드 해싱
- **HMAC**: 메시지 인증 코드

## 보안 개발 수명주기 (SDL)

### 1. 교육 및 인식
- 개발팀 보안 교육
- 보안 모범 사례 공유

### 2. 요구사항 수집
- 보안 요구사항 정의
- 위협 모델링 수행

### 3. 설계
- 보안 설계 검토
- 위협 모델링 업데이트

### 4. 구현
- 보안 코딩 표준 적용
- 코드 리뷰 시 보안 검토

### 5. 검증
- 정적 분석 도구 사용
- 동적 보안 테스트 수행

### 6. 배포
- 보안 설정 검증
- 모니터링 설정

## 실무 도구 및 프레임워크

### 정적 분석
- **SonarQube**: 코드 품질 및 보안 분석
- **Snyk**: 오픈소스 취약점 스캔
- **Checkmarx**: 정적 애플리케이션 보안 테스트

### 동적 분석
- **OWASP ZAP**: 웹 애플리케이션 스캐너
- **Burp Suite**: 웹 취약점 분석
- **Nessus**: 취약점 스캐너

### 보안 프레임워크
- **Spring Security**: Java 보안 프레임워크
- **Helmet.js**: Express.js 보안 미들웨어
- **OWASP ESAPI**: 보안 API

## 사고 대응

### 인시던트 대응 계획
1. **탐지**: 보안 이벤트 모니터링
2. **평가**: 영향도 및 범위 평가
3. **격리**: 추가 피해 방지
4. **복구**: 시스템 복원
5. **교훈**: 사후 분석 및 개선

### 포렌식
- **로그 분석**: 이벤트 추적
- **메모리 덤프**: 휘발성 데이터 수집
- **파일 시스템 분석**: 증거 수집

## 규정 준수
- **GDPR**: 유럽 개인정보 보호법
- **CCPA**: 캘리포니아 소비자 개인정보 보호법
- **ISO 27001**: 정보 보안 관리 시스템

## 학습 리소스
- [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [Web Application Hacker's Handbook](https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470)
- [Cryptography Engineering](https://www.schneier.com/books/cryptography-engineering/)

## 다음 단계
1. OWASP Top 10 공부부터 시작
2. 개인 프로젝트에 보안 모범 사례 적용
3. 취약점 스캐너로 코드 분석 실습
4. 보안 인증 취득 고려 (CEH, OSCP)