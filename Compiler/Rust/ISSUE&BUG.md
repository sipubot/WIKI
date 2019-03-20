# Rust 관련 이슈 및 버그

## Png 압축 프로그램

>을 만드려고 했더니 이미 rust로 작성된 프로그램이 있는 바람에..

[링크](https://pngquant.org/) 참고하며 소스 코드도 보는 것이 좋을듯 하다.

## 문자열 관련 메서드 알아두기

- rust는 기존 언어들과 달리 + 연산자를 이용한 문자열 접합을 지원하지 않는다.
- 따라서 다음의 메서드를 이용하여 작업해야 함

```rust
  //push_str
  let mut s1 = String::from("foo");
  let s2 = "bar";
  s1.push_str(&s2);
  println!("s2 is {}", s2);
  //push 상동
  //format!
  let s = format!("rorororor{}{}","string","string");
```
