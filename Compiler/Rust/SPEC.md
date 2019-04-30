# 스펙 정리 

>(필요하거나 알아야할것들만 전체적 정리는 하지 않기로 그런건 책으로 나와 있으니 혹은 언어개발이 아닌이상 할수도 없고)

초보자를 위한 rust 3계명

- 체호프의 법칙을 준수할 것
- 모든 값은 반드시 캡슐로 리턴된다 (ok or err), (Some, None) 물론 임의로 생성한 함수는 본인 마음대로
- &**&&*&& 참조 레퍼런스에 너무 연연하지 말자 하지만 어떻게 동작하는지는 반드시 알아두어야 한다. 자료형이 기본으로 주어지는 것 + 자주 사용하는 자료형들을 충분히 익혀 둘것

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

- 재귀 처리를 위한 추가적인 정보들 (데이크스트라)
- 이진힙에 노드를 집어 넣고 while 문을 이용해서 탐색 (엄밀히 말하면 재귀는 아닌거 같지만)
```rust
use std::cmp::Ordering;
use std::collections::BinaryHeap;
use std::usize;
 
 
struct Grid<T> {
    nodes: Vec<Node<T>>,
}
 
struct Node<T> {
    data: T,
    edges: Vec<(usize,usize)>,
}
 
#[derive(Copy, Clone, Eq, PartialEq)]
struct State {
    node: usize,
    cost: usize,
}
 
// Manually implement Ord so we get a min-heap instead of a max-heap
impl Ord for State {
    fn cmp(&self, other: &Self) -> Ordering {
        other.cost.cmp(&self.cost)
    }
}
 
impl PartialOrd for State {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}
 
type WeightedEdge = (usize, usize, usize);
 
impl<T> Grid<T> {
    fn new() -> Self {
        Grid { nodes: Vec::new() }
    }
 
    fn add_node(&mut self, data: T) -> usize {
        let node = Node {
            edges: Vec::new(),
            data: data,
        };
        self.nodes.push(node);
        self.nodes.len() - 1
    }
 
    fn create_edges<'a, I>(&mut self, iterator: I) where I: IntoIterator<Item=&'a WeightedEdge> {
        for &(start,end,weight) in iterator.into_iter() {
            self.nodes[start].edges.push((end,weight));
            self.nodes[end].edges.push((start,weight));
        }
 
    }
 
    fn find_path(&self, start: usize, end: usize) -> Option<(Vec<usize>, usize)> {
        let mut dist = vec![(usize::MAX, None); self.nodes.len()];
 
        let mut heap = BinaryHeap::new();
        dist[start] = (0, None);
        heap.push(State {
            node: start,
            cost: 0,
        });
 
        while let Some(State { node, cost }) = heap.pop() {
            if node == end {
                let mut path = Vec::with_capacity(dist.len() / 2);
                let mut current_dist = dist[end];
                path.push(end);
                while let Some(prev) = current_dist.1 {
                    path.push(prev);
                    current_dist = dist[prev];
                }
                path.reverse();
                return Some((path, cost));
            }
 
            if cost > dist[node].0 {
                continue;
            }
            for edge in &self.nodes[node].edges {
                let next = State {
                    node: edge.0,
                    cost: cost + edge.1,
                };
                if next.cost < dist[next.node].0 {
                    dist[next.node] = (next.cost, Some(node));
                    heap.push(next);
                }
            }
        }
        None
    }
}
 
fn main() {
    let mut grid = Grid::new();
    let (a,b,c,d,e,f) = (grid.add_node("a"), grid.add_node("b"),
                         grid.add_node("c"), grid.add_node("d"),
                         grid.add_node("e"), grid.add_node("f"));
 
    grid.create_edges(&[
        (a,b,7) ,(a,c,9) ,(a,f,14),
        (b,c,10),(b,d,15),(c,d,11),
        (c,f,2) ,(d,e,6) ,(e,f,9) ,
    ]);
 
    let (path, cost) = grid.find_path(a,e).unwrap();
 
    print!("{}", grid.nodes[path[0]].data);
    for i in path.iter().skip(1) {
        print!(" -> {}", grid.nodes[*i].data);
    }
    println!("\nCost: {}", cost);
 
}
```

## 트리구조 탐색 

> rojjeta code에서 발췌

- 재귀 처리를 위해서 약간 복잡한 수고가 들긴 하지만 확실히 기본적인 코딩 루트이므로 암기에 가까운 이해를 해두어야 편함
```rust
#![feature(box_syntax, box_patterns)]
 
use std::collections::VecDeque;
 
// 구조체 트리노드 T타입으로 어떤 타입이라도 넣을수 있게 설계 
#[derive(Debug)]
struct TreeNode<T> {
    value: T,
    left: Option<Box<TreeNode<T>>>,
    right: Option<Box<TreeNode<T>>>,
}

//탐색 순서 메소드
enum TraversalMethod {
    PreOrder,
    InOrder,
    PostOrder,
    LevelOrder,
}
 
impl<T> TreeNode<T> {
    pub fn new(arr: &[[i8; 3]]) -> TreeNode<i8> {
        //새로운 노드를 만들때 참고로 3개의길이를 가진 vec으로 정의함 각노드는 포인터로 연결 되는것에 주의
        let l = match arr[0][1] {
            -1 => None,
            i @ _ => Some(Box::new(TreeNode::<i8>::new(&arr[(i - arr[0][0]) as usize..]))),
        };
        let r = match arr[0][2] {
            -1 => None,
            i @ _ => Some(Box::new(TreeNode::<i8>::new(&arr[(i - arr[0][0]) as usize..]))),
        };
 
        TreeNode {
            value: arr[0][0],
            left: l,
            right: r,
        }
    }
 
    pub fn traverse(&self, tr: &TraversalMethod) -> Vec<&TreeNode<T>> {
        match tr {
            &TraversalMethod::PreOrder => self.iterative_preorder(),
            &TraversalMethod::InOrder => self.iterative_inorder(),
            &TraversalMethod::PostOrder => self.iterative_postorder(),
            &TraversalMethod::LevelOrder => self.iterative_levelorder(),
        }
    }
    //각 노드를 참조복사 해서 확인한다 (res에 밀어 넣으면서 stack에도 밀어 넣는것을 잘 확인 할것 )
    fn iterative_preorder(&self) -> Vec<&TreeNode<T>> {
        let mut stack: Vec<&TreeNode<T>> = Vec::new();
        let mut res: Vec<&TreeNode<T>> = Vec::new();
 
        stack.push(self);
        while !stack.is_empty() {
            let node = stack.pop().unwrap();
            res.push(node);
            match node.right {
                None => {}
                Some(box ref n) => stack.push(n),
            }
            match node.left {
                None => {}
                Some(box ref n) => stack.push(n),
            }
        }
        res
    }
 
    // Leftmost to rightmost
    fn iterative_inorder(&self) -> Vec<&TreeNode<T>> {
        let mut stack: Vec<&TreeNode<T>> = Vec::new();
        let mut res: Vec<&TreeNode<T>> = Vec::new();
        let mut p = self;
 
        loop {
            // Stack parents and right children while left-descending
            loop {
                match p.right {
                    None => {}
                    Some(box ref n) => stack.push(n),
                }
                stack.push(p);
                match p.left {
                    None => break,
                    Some(box ref n) => p = n,
                }
            }
            // Visit the nodes with no right child
            p = stack.pop().unwrap();
            while !stack.is_empty() && p.right.is_none() {
                res.push(p);
                p = stack.pop().unwrap();
            }
            // First node that can potentially have a right child:
            res.push(p);
            if stack.is_empty() {
                break;
            } else {
                p = stack.pop().unwrap();
            }
        }
        res
    }
 
    // Left-to-right postorder is same sequence as right-to-left preorder, reversed
    fn iterative_postorder(&self) -> Vec<&TreeNode<T>> {
        let mut stack: Vec<&TreeNode<T>> = Vec::new();
        let mut res: Vec<&TreeNode<T>> = Vec::new();
 
        stack.push(self);
        while !stack.is_empty() {
            let node = stack.pop().unwrap();
            res.push(node);
            match node.left {
                None => {}
                Some(box ref n) => stack.push(n),
            }
            match node.right {
                None => {}
                Some(box ref n) => stack.push(n),
            }
        }
        let rev_iter = res.iter().rev();
        let mut rev: Vec<&TreeNode<T>> = Vec::new();
        for elem in rev_iter {
            rev.push(elem);
        }
        rev
    }
 
    fn iterative_levelorder(&self) -> Vec<&TreeNode<T>> {
        let mut queue: VecDeque<&TreeNode<T>> = VecDeque::new();
        let mut res: Vec<&TreeNode<T>> = Vec::new();
 
        queue.push_back(self);
        while !queue.is_empty() {
            let node = queue.pop_front().unwrap();
            res.push(node);
            match node.left {
                None => {}
                Some(box ref n) => queue.push_back(n),
            }
            match node.right {
                None => {}
                Some(box ref n) => queue.push_back(n),
            }
        }
        res
    }
}
 
fn main() {
    // Array representation of task tree
    let arr_tree = [[1, 2, 3],
                    [2, 4, 5],
                    [3, 6, -1],
                    [4, 7, -1],
                    [5, -1, -1],
                    [6, 8, 9],
                    [7, -1, -1],
                    [8, -1, -1],
                    [9, -1, -1]];
 
    let root = TreeNode::<i8>::new(&arr_tree);
 
    for method_label in [(TraversalMethod::PreOrder, "pre-order:"),
                         (TraversalMethod::InOrder, "in-order:"),
                         (TraversalMethod::PostOrder, "post-order:"),
                         (TraversalMethod::LevelOrder, "level-order:")]
                            .iter() {
        print!("{}\t", method_label.1);
        for n in root.traverse(&method_label.0) {
            print!(" {}", n.value);
        }
        print!("\n");
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
