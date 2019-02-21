# FrameWork

프로젝트 cargo를 바탕으로 여러가지 프레임워크들이 많들어 지고 있는중

## IDE

### ATOM

초기 프로젝트 생성

```cmd
  cargo new --bin [ProjectName]
```

그리고 아톰을 열어서 프로젝트를 확인하면 된다.

### Visual Studio Code

>현재 rust 관련 해서 가장 많이 쓰이고(?) 있을것 같은 IDE

>기존 아톰에 비해 속도면에서 굉장히 진일보된 면이 있음 DEBUG 설정이 되면 빌드나 디버깅이 굉장히 유연해 짐 

>power shell 연동하여 windows 에서도 linux와 유사한 환경으로 빌드환경을 갖출수 있음


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
