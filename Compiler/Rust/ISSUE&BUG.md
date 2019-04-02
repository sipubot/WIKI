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

## static 과 const

```rust
    //Constants

const N: i32 = 5;

    //Statics

static N: i32 = 5;
```

- 둘다 상수로 지정할때 사용함
- 차이점은 const는 함수내에서 지정된 메모리에서 변경이 없을 경우에 쓰는 경우가 많고 (이를테면 모듈분리 할때나 그럴때)
- static은 프로세스 전체에서 항상 같은 메모리를 바라본다라고 정의 되어 있음 보통의 경우 static을 쓰지 않는다 라고 설명되어 있으며 사용할 경우는 파일 제일 상위 함수 밖에서 정의하기를 권고하고 있다.

## 자료형

- 자료형이야 말로 언어 사용의 꽃이니 잘 정리해두자 (확장 자료형은 정의 하기 나름이므로 기본 자료형을 빠삭하게 아는것이 언제나 중요하다.)
- [링크](https://github.com/learning-rust/site/blob/master/source/docs/a8.primitive_data_types.md)
