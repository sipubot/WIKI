# 자료 구조

## 스택

  스택은 말그대로 쌓는다는 의미의 자료구조 인간의 가장 기본적이고 본능적인 구조 이를 테면 선사시대 부터 저장해오던 방법. 큐는 어떤 의미냐 하면 70년대 쯤 유행하던 쌀통을 생각하면 될것이다. 처음들어간 것이 처음 나오는것 요즘 많이 쓰이는 곳

- 자판기
- 공장 자동화
- 대기순서가 있는 작업들.

- [큐 스택 관련 강의](https://leetcode.com/explore/featured/card/queue-stack/)

### [스택:배열](https://www.cs.usfca.edu/%7Egalles/visualization/StackArray.html)

### [스택:링크드리스트](https://www.cs.usfca.edu/%7Egalles/visualization/StackLL.html)

### [큐:배열](https://www.cs.usfca.edu/%7Egalles/visualization/QueueArray.html)

### [큐:링크드리스트](https://www.cs.usfca.edu/%7Egalles/visualization/QueueLL.html)

## 트리

  나무 형태의 (역방향) 자료구조를 말한다 종류도 다양하고 방식도 여러가지 메인으로 쓰이는것은 B+트리 대부분 이진트리 구조를 가지며 여러 노드를 가질경우엔 그래프 구조를 쓸 경우가 많음

- [트리 이해하기](https://leetcode.com/explore/learn/card/data-structure-tree/)

- 트리는 나무를 형상화한 데이터 구조 물론 컴퓨터에선 root를 상위로 묘사하고 아래로 가지를 치며 데이터를 저장한다. 트리구조의 핵심은 부모노드는 하나라는 점 대부분의 트리구조는 이진트리 구조로 사용하고 특별한 경우 다른 트리를 쓰게 된다.

- 트리는 자료를 인덱싱하는데 특화 되어 있는데 구조자체가 2^n 계층으로 되어 있기때문에 nLogn 의 [검색속도](https://ko.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search)를 가지게 된다.

- 이러한 특성 때문에 트리는 자료 저장에 많이 쓰이고 파일시스템에서 기본적으로 쓰이는 구조임 특히 [B+트리](https://ko.wikipedia.org/wiki/B%2B_%ED%8A%B8%EB%A6%AC)는 대부분의 운영체제의 파일 시스템이다. [hashed B 트리](https://ko.wikipedia.org/wiki/Ext4) 는 리눅스의 ext4 파일시스템으로 쓰이고 있다.

- 트리 탐색 방법에 대해 정리
  - preorder : p, left, right
  - inorder : left, p, right
  - postorder : left, right, p

### [이진 탐색 트리](https://www.cs.usfca.edu/%7Egalles/visualization/BST.html)

- 삽입속도는 굉장히 빠르지만 완전 이진 트리 구조를 유지할수는 없다. (항상 보장 되지 않음) 기본적으로 만들기 쉽고 성능도 어느 정도 보장 되므로 트리 개념을 익히는데 좋음

### [AVL 트리](https://www.cs.usfca.edu/%7Egalles/visualization/AVLtree.html)

- 이진 탐색트리의 보완 탐색 속도는 가장 빠르게 보장 되지만 트리 재정렬 하는데 비용이 많음
- 자식들간의 깊이 차이가 1이하이여야 한다 이를 위해서 재정렬 작업을 함
- [참고자료](http://devidea.tistory.com/entry/AVL-Tree)

### [레드블랙 트리](https://www.cs.usfca.edu/%7Egalles/visualization/RedBlack.html)

- AVL 트리 재정렬 횟수 보완
- 조건 :
  - 노드는 레드 혹은 블랙 중의 하나이다.
  - 루트 노드는 블랙이다.
  - 모든 리프 노드는 블랙이다.
  - 레드 노드의 자식노드 양쪽은 언제나 모두 블랙이다. (즉, 레드 노드는 연달아 나타날 수 없으며, 블랙 노드만이 레드 노드의 부모 노드가 될 수 있다)
  - 어떤 노드로부터 시작되어 리프 노드에 도달하는 모든 경로에는 리프 노드를 제외하면 모두 같은 개수의 블랙 노드가 있다.
- [참고자료](http://ddmix.blogspot.com/2015/02/cppalgo-19-red-black-tree.html)
- [참고자료2](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree)

### [스플레이 트리](https://www.cs.usfca.edu/%7Egalles/visualization/SplayTree.html)

### [TRIE](https://www.cs.usfca.edu/%7Egalles/visualization/Trie.html)

  문자열을 트리 구조로 만드는것 사전 인덱싱을 생각하면 이해가 편리함(한개의 스트릴 끊는다)

### [RADIX TREE](https://www.cs.usfca.edu/%7Egalles/visualization/RadixTree.html)

  분기점을 문자단위로 하는 것이 아니라 입력 된 값들 중 차이가 발생할때 나누는 것(사전 탐색시 속도가 더 빨라짐)

### [B TREE](https://www.cs.usfca.edu/%7Egalles/visualization/BTree.html)

### [B+ TREE](https://www.cs.usfca.edu/%7Egalles/visualization/BPlusTree.html)

  가장 대중적인 (파일시스템에서) 트리구조 중점적으로 공부할 필요가 있음

- [소스코드](http://goneill.co.nz/btree.php)
- [기본메서드](http://goneill.co.nz/btree-notes.php)

## 해시

  값을 모듈러로 키값을 추출하여 메모리에 직접 삽입하는 것 여러 종류가 있음

### [오픈해시테이블](https://www.cs.usfca.edu/%7Egalles/visualization/OpenHash.html)

### [클로즈해시테이블](https://www.cs.usfca.edu/%7Egalles/visualization/ClosedHash.html)

  (버킷을 쓰는 버전도 있음)
