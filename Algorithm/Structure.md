# 자료 구조

[큐 스택 관련 강의](https://leetcode.com/explore/featured/card/queue-stack/)

- 스택은 말그대로 쌓는다는 의미의 자료구조 인간의 가장 기본적이고 본능적인 구조 이를 테면 선사시대 부터 저장해오던 방법. 큐는 어떤 의미냐 하면 70년대 쯤 유행하던 쌀통을 생각하면 될것이다. 처음들어간 것이 처음 나오는것 요즘 많이 쓰이는 곳
  - 자판기
  - 공장 자동화
  - 대기순서가 있는 작업들.

[트리 이해하기](https://leetcode.com/explore/learn/card/data-structure-tree/)

- 트리는 나무를 형상화한 데이터 구조 물론 컴퓨터에선 root를 상위로 묘사하고 아래로 가지를 치며 데이터를 저장한다. 트리구조의 핵심은 부모노드는 하나라는 점 대부분의 트리구조는 이진트리 구조로 사용하고 특별한 경우 다른 트리를 쓰게 된다.

- 트리는 자료를 인덱싱하는데 특화 되어 있는데 구조자체가 2^n 계층으로 되어 있기때문에 nLogn 의 [검색속도](https://ko.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search)를 가지게 된다.

- 이러한 특성 때문에 트리는 자료 저장에 많이 쓰이고 파일시스템에서 기본적으로 쓰이는 구조임 특히 [B+트리](https://ko.wikipedia.org/wiki/B%2B_%ED%8A%B8%EB%A6%AC)는 대부분의 운영체제의 파일 시스템이다. [hashed B 트리](https://ko.wikipedia.org/wiki/Ext4) 는 리눅스의 ext4 파일시스템으로 쓰이고 있다.

- 트리 탐색 방법에 대해 정리
  - preorder : p, left, right
  - inorder : left, p, right
  - postorder : left, right, p