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

- 재귀 처리를 위한 추가적인 정보들 
```rust
use std::{
    cell::Cell,
    cmp::Ordering,
    collections::{BinaryHeap, HashMap},
    fmt,
    hash::{Hash, Hasher},
};

fn main() {
    let s = Vertex::new("s");
    let t = Vertex::new("t");
    let x = Vertex::new("x");
    let y = Vertex::new("y");
    let z = Vertex::new("z");

    // A map from vertices to their adjacent vertices including costs
    let mut adjacency_list = HashMap::new();
    adjacency_list.insert(&s, vec![(&t, 10), (&y, 5)]);
    adjacency_list.insert(&t, vec![(&y, 2), (&x, 1)]);
    adjacency_list.insert(&x, vec![(&z, 4)]);
    adjacency_list.insert(&y, vec![(&t, 3), (&x, 9), (&z, 2)]);
    adjacency_list.insert(&z, vec![(&s, 7), (&x, 6)]);

    dijkstra(&s, &adjacency_list);

    adjacency_list.keys().for_each(|v| println!("{}", v));
}

fn dijkstra(
    start: &Vertex<'_>,
    adjacency_list: &HashMap<&Vertex<'_>, Vec<(&Vertex<'_>, usize)>>,
) {
    start.distance.set(0);

    // Fill the binary heap, vertices with the smallest distance go first
    let mut to_visit = BinaryHeap::new();
    adjacency_list.keys().for_each(|v| to_visit.push(*v));

    // We visit the vertices with the smallest distance first, this is
    // what makes Dijkstra a greedy algorithm
    while let Some(v) = to_visit.pop() {
        if let Some(neighbors) = adjacency_list.get(v) {
            for (n, cost) in neighbors {
                let new_distance = v.distance.get() + cost;
                if new_distance < n.distance.get() {
                    n.distance.set(new_distance);
                }
            }
            // When changing a vertex' distance, the BinaryHeap doesn't
            // update the position of the vertex.
            // That's why we create a new heap with the right order.
            let mut new_heap = BinaryHeap::new();
            to_visit.iter().for_each(|x| new_heap.push(*x));
            to_visit = new_heap;
        }
    }
}

#[derive(Eq)]
struct Vertex<'a> {
    name: &'a str,
    distance: Cell<usize>,
}

impl<'a> Vertex<'a> {
    fn new(name: &'a str) -> Vertex<'a> {
        Vertex {
            name,
            distance: Cell::new(usize::max_value()),
        }
    }
}
impl<'a> Hash for Vertex<'a> {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.name.hash(state);
    }
}

/// Since this Vertex will be put in a priority queue where the vertices
/// with the *smallest* distance should be processed first, `cmp`
/// returns GT if self.distance().get() < other.distance().get()
impl<'a> Ord for Vertex<'a> {
    fn cmp(&self, other: &Vertex<'a>) -> Ordering {
        other.distance.get().cmp(&self.distance.get())
    }
}
impl<'a> PartialOrd for Vertex<'a> {
    fn partial_cmp(&self, other: &Vertex<'a>) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}
impl<'a> PartialEq for Vertex<'a> {
    fn eq(&self, other: &Vertex<'a>) -> bool {
        self.name == other.name
    }
}

impl<'a> fmt::Display for Vertex<'a> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "name: {}, distance: {}",
            self.name,
            self.distance.get()
        )
    }
}
```

## macro 문법 

> meta 프로그래밍 기능 이라고 봐도 무방하다. 
>
> 역시나 이부분은 러스트를 다 마치고 난 이후에 하는 것으로 재귀는 나중에 파보자.

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
    //기존 사용중인 vec! 매크로는 다음과 같다
    macro_rules! vec {
        ( $( $x:expr ),* ) => {
            {
                let mut temp_vec = Vec::new();
                $(
                    temp_vec.push($x);
                )*
                temp_vec
            }
        };
    }
    macro_rules! write_html {
        ($w:expr, ) => (());

        ($w:expr, $e:tt) => (write!($w, "{}", $e));

        ($w:expr, $tag:ident [ $($inner:tt)* ] $($rest:tt)*) => {{
            write!($w, "<{}>", stringify!($tag));
            write_html!($w, $($inner)*);
            write!($w, "</{}>", stringify!($tag));
            write_html!($w, $($rest)*);
        }};
    }
    //html 출력 :tt :expr 등의 문법이 있는데 아직 찾지 못했다. 
    fn main() {
        use std::fmt::Write;
        let mut out = String::new();

        write_html!(&mut out,
            html[
                head[title["Macros guide"]]
                body[h1["Macros are the best!"]]
            ]);

        assert_eq!(out,
            "<html><head><title>Macros guide</title></head>\
             <body><h1>Macros are the best!</h1></body></html>");
    }
```
- [각 부분의 명령어 설명](https://danielkeep.github.io/tlborm/book/mbe-macro-rules.html#captures);
