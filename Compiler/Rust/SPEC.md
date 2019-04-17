# 스펙 정리 

>(필요하거나 알아야할것들만 전체적 정리는 하지 않기로 그런건 책으로 나와 있으니 혹은 언어개발이 아닌이상 할수도 없고)

초보자를 위한 rust 3계명

- 체호프의 법칙을 준수할 것
- 모든 값은 반드시 캡슐로 리턴된다 (ok or err), (Some, None) 물론 임의로 생성한 함수는 본인 마음대로
- &**&&*&& 참조 레퍼런스에 너무 연연하지 말자 하지만 어떻게 동작하는지는 반드시 알아두어야 한다.

## 재귀 함수 관련

> 러스트는 모든 명령어 처리를 스택을 기준으로 동작하기 때문에 재귀 함수의 경우 '크기'에 대한 측정이 불가능 하다 따라서 graph 나 node 같은 계층 구조를 가지는 구조에 대해선 Box를 이용하여 참조메모리 사이즈를 기준으로 만들어 메모리 사이즈를 기준으로 동작하게 된다. (이것도 엄밀히 말해선 크기 예측 불가이지만 어쨌든 안정성을 위해 최대의 구현 방법)

```rust
use std::rc::Rc;
use std::cell::RefCell;

struct Node<T> {
    previous: Rc<RefCell<Box<Node<T>>>>,
    //        ^  ^       ^   ^
    //        |  |       |   |
    //        |  |       |   - The next Node with generic `T`
    //        |  |       |
    //        |  |       - Heap allocated memory, needed
    //        |  |         if `T` is a trait object.
    //        |  |
    //        |  - A mutable memory location with
    //        |    dynamically checked borrow rules.
    //        |    Needed because `Box` is immutable.
    //        |
    //        - Reference counted pointer, will be
    //          dropped when every reference is gone.
    //          Needed to create multiple node references.

    next: Vec<Rc<RefCell<Box<T>>>>,
    data: T,
    // ...
}


```

## macro 문법 

> meta 프로그래밍 기능 이라고 봐도 무방하다. 

- 문법이 기존의 rust 문법과는 다르다는게 주요함 선언 방법은 매우 간단하다. macro_rules! 를 이용해 매크로 이름을 선언한뒤 정의
- 기본 문법은 다음과 같다.
```rust
    macro_rules! prt {
        ($s:expr) => {
            println!("{:?}", $s);
        };
        (/*패턴부*/) => (/*표현부*/)
    }
    //기존 모나드를 생각했을때 다음과 같은 문법은 정확히 일치한다고 볼수 있다. 단 패턴에 따라 여러개로 나뉘는 부분은 생소할수 있으므로 주의
```
