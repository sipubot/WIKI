# FrameWork

프로젝트 cargo를 바탕으로 여러가지 프레임워크들이 많들어 지고 있는중

## 참고문서들

[쿡북](https://rust-lang-nursery.github.io/rust-cookbook/intro.html)
[IRC](https://client00.chat.mibbit.com/?server=irc.mozilla.org&channel=%23rust)

> borrow 개념을 아는 것도 중요하지만 기존에 쓰이던 람다식을 확실히 알아둬야

> 모나드에서 형변환 하는 것도 지원한다. collect 메서드 확인

> unwrap, expect, iter, clone 같은 메서드를 자주 쓸 경우가 많으므로 참고하여야 함

## 의존성 관리 (cargo)

[링크](https://crates.io/)

## 서버 프레임워크 & 프론트 프레임워크

> 애초 목표가 웹엔진 개발이어서 그런지 웹관련 프레임 워크가 굉장히 많이 등장해 있다. 그중 대중화 된 것 들만 추림

### 서버

>어째 쇳덩이 이름들이 즐비한 것 같지만 넘기자 언어 이름부터 답이 없잖아...
- [하이퍼](https://hyper.rs/) : 아래 몇가지의 프레임워크들의 모대가 되는 마이크로프로그램 
- [아이론](http://ironframework.io/) : 성능과 대중성을 가지고 있는 프레임 워크 우선적으로 참고할것
- [로켓](https://rocket.rs/) : 홈페이지는 가장 많이 꾸며 두었으나 벤치상 문제점이 많이 보이는 듯
- [니켈](http://nickel-org.github.io/) : 단출 하지만 벤치 성능은 좋아 보임 https를 지원하지 않는게 문제
- [고담](https://gotham.rs/) : 설명은 잘되어 있다 아이론 다음으로 주목받는 프레임 워크 인듯
- [엑티스](https://actix.rs/)

### 프론트 

- [하이퍼](https://hyper.rs/) : 아래 몇가지의 프레임워크들의 모대가 되는 마이크로프로그램 프론트도 있다.
- [이유](https://github.com/DenisKolodin/yew) : 이름을 뭐라고 해야할지
- [엑티스](https://actix.rs/)

## IDE

### ATOM

초기 프로젝트 생성

```cmd
  cargo new --bin [ProjectName]
```

그리고 아톰을 열어서 프로젝트를 확인하면 된다.

### Visual Studio Code

>현재 rust 관련 해서 가장 많이 쓰이고(?) 있을것 같은 IDE..
>기존 아톰에 비해 속도면에서 굉장히 진일보된 면이 있음 DEBUG 설정이 되면 빌드나 디버깅이 굉장히 유연해 짐 ..
>power shell 연동하여 windows 에서도 linux와 유사한 환경으로 빌드환경을 갖출수 있음..


설정 방법

-[rustup 설치](https://rustup.rs/)
-[visual studio code 설치 or 압축버전](https://code.visualstudio.com/)
-[c++ build tool 설치](https://visualstudio.microsoft.com/ko/visual-cpp-build-tools/?rr=https%3A%2F%2Fgithub.com%2F)-
-[linux 의 경우 build make](https://sagiegurari.github.io/cargo-make/)
- windows의 경우 설치후 visual studio code 추가할 플러그인 들
  - C/C++
  - Code Runner
  - Native Debug
  - Rust
  - Rust (rls)
  - Rusty Code

rustup update, cargo update, rustc update 커맨드로 업데이트 시켜주어야 제대로 동작가능 
(visual studio code 의 상태줄을 확인하며 오류를 해결하면 편리)

## CODE

### word counter

- 간단한 파일 복사 붙여넣기, 단어세기 등의 소스
- 유니코드 지원이 가능해서 한글처리에 따로 추가할 것이 없다.

[소스](https://github.com/sipubot/WIKI/blob/master/Compiler/Rust/word_counter.rs)

### json builder 

- JS-ASMR 용 json 생성기 
- Image Resize 후 json으로 조립.
- 압축률 관련해서 찾아보고 있는데 오류가 나서 해법 찾는중 
- tiny_png 보다 압축률이 적어서 쓸모가 있나 싶기도 하다. 

[소스](https://github.com/sipubot/WIKI/blob/master/Compiler/Rust/json_build.rs)
