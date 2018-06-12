# 이것저것 줏어 넣은 알고리즘들.

멍청하고 머리가 나빠서 이렇게 적어두지 않으면 결코 찾아낼수 없는 것들. 재귀 함수 관련 기법들이 많은데 재귀함수를 많이 쓰지 않아서 이부분이 취약한거 같다.
[링크](https://en.wikipedia.org/wiki/List_of_algorithms)
일단 정리 된것들 부터 하나씩 번역해가며 보는게 좋지 않을까.

## 위키 정리

### 브렌츠(함수 참조사이에서), 플로이드(데이터 리스트에서) 알고리즘
싱글링크드리스트의 순환(사이클)을 찾아내는 알고리즘 이라고 해석하면 되는건가. 토끼와 거북이 알고리즘으로 많이들 해석하고 있군
[위키](https://en.wikipedia.org/wiki/Cycle_detection)
[자바스크립트](https://gist.github.com/borgar/3317728)
[번역](http://egloos.zum.com/minjang/v/1687021)

### Stable marriage problem (SMP)
안정적인 결합에 관한 알고리즘
    최악을 제거하면서 안정도를 늘리는 방법이다. (따라서 최상의 커플이 나올수도 안나올수도 있다.) 소모시간은 O(n^2) 으로 논문이 나와있음
[위키](https://en.wikipedia.org/wiki/Stable_marriage_problem)
[번역](http://cubistkang.tistory.com/62)
[파이선](https://github.com/suwon419/cubist/blob/etc/src/python/etc/marriage.py)

### 난수 생성 알고리즘
(정말 많군)
[위키](https://namu.wiki/w/%EB%82%9C%EC%88%98%EC%83%9D%EC%84%B1)

### 지도 색칠 알고리즘
[위키](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%84_%EC%83%89%EC%B9%A0)

### 헝가리안 알고리즘
Hopcroft–Karp algorithm 이라고 이것의 탐색시간을 줄인것도 존재 한다. 구현이 복잡해서 잘쓰지 않는듯.
최적화 관련 메소드라고 해도되고 알고리즘이라고 해도 되고
[위키](https://en.wikipedia.org/wiki/Hungarian_algorithm)
[참조위키](http://wiki.yonseics.net/index.php/%ED%97%9D%EA%B0%80%EB%A6%AC%EC%95%88_%EB%A9%94%EC%86%8C%EB%93%9C)
[번역](http://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040101&docId=64696783&qb=x%20uwobiuvsgguN680rXl)
[씨](https://github.com/maandree/hungarian-algorithm-n3/blob/master/hungarian.c)
[파이선](https://github.com/tdedecko/hungarian-algorithm)
[자바스크립트](https://github.com/addaleax/munkres-js)

### 위상 정렬
한국어 위키에는 개념만 있고 자세한 알고리즘 소개가 없다.
[위키](https://en.wikipedia.org/wiki/Topological_sorting)

### Force-directed graph drawing
요즘 한창 비주얼로 뜨고 있는 것
d3에 내장되어 있는 기능이라 개념만 알아도 괜찮을듯 싶다.
json을 이용해서 트리를 그래프로 변환시켜줌 문제는 응집도를 볼때 쓰는 것이라 구체적인 데이터를 보여주는데는 쓰면 안된다. (물론... 한국은 안그렇다.)
[위키](https://en.wikipedia.org/wiki/Force-directed_graph_drawing)

### pageRank 알고리즘
워낙 유명하니.. 위키에도 자세히 나와있다. 개념만 알아두는것이 좋다. 물론 영어위키를 참조하길...(한글 위키는 정말 부실해.)
[위키](https://en.wikipedia.org/wiki/PageRank)

### 유량 알고리즘들  (네트워크 부하 분산 관련에서 쓰일듯 하지만 아직 이런 알고리즘을 쓸만큼 코어 개발쪽은 해본적이 없다. 아쉽네.)
[Dinic's algorithm](https://en.wikipedia.org/wiki/Dinic%27s_algorithm)
[Edmonds–Karp algorithm](https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm)
[Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)

### 최적해 찾기 알고리즘
시스템의 성능과 최적값 사이의 문제 (그래픽 엔진의 경우에 자주 쓰일듯 함)

[가우스 소거 Gaussian elimination](https://ko.wikipedia.org/wiki/%EA%B0%80%EC%9A%B0%EC%8A%A4_%EC%86%8C%EA%B1%B0%EB%B2%95)
[github](https://github.com/itsravenous/gaussian-elimination/blob/master/gauss.js)

```javascript
var abs = Math.abs;
function array_fill(i, n, v) {
    var a = [];
    for (; i < n; i++) {
        a.push(v);
    }
    return a;
}

/**
 * Gaussian elimination
 * @param  array A matrix
 * @param  array x vector
 * @return array x solution vector
 */
function gauss(A, x) {
    var i, k, j;
    // Just make a single matrix
    for (i=0; i < A.length; i++) {
        A[i].push(x[i]);
    }

    var n = A.length;
    for (i=0; i < n; i++) {
        // Search for maximum in this column
        var maxEl = abs(A[i][i]),
            maxRow = i;
        for (k=i+1; k < n; k++) {
            if (abs(A[k][i]) > maxEl) {
                maxEl = abs(A[k][i]);
                maxRow = k;
            }
        }
        // Swap maximum row with current row (column by column)
        for (k=i; k < n+1; k++) {
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }
        // Make all rows below this one 0 in current column
        for (k=i+1; k < n; k++) {
            var c = -A[k][i]/A[i][i];
            for (j=i; j < n+1; j++) {
                if (i===j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
        }
    }
    // Solve equation Ax=b for an upper triangular matrix A
    x = array_fill(0, n, 0);
    for (i=n-1; i > -1; i--) {
        x[i] = A[i][n]/A[i][i];
        for (k=i-1; k > -1; k--) {
            A[k][n] -= A[k][i] * x[i];
        }
    }

    return x;
}
```

[경사하강 gradient descent](https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%82%AC_%ED%95%98%EA%B0%95%EB%B2%95)
  - [example](https://jsfiddle.net/littlegustv/rw9bbehc/)
  - [참고자료](http://darkpgmr.tistory.com/133)

[켤레기울기 Conjugate Gradient](https://ko.wikipedia.org/wiki/%EC%BC%A4%EB%A0%88%EA%B8%B0%EC%9A%B8%EA%B8%B0%EB%B2%95)

...



## 퀴즈 풀면서 눈여겨본 알고리즘

### 콘웨이의 생명게임

특정 좌표를 하나의 점으로 두고 이 점이 어떤 조건하에서 주기적인 변화를 가지게 될때 이것의 변화가 패턴을 가지거나 혹은 유지 발산 소멸되는 것.

- 알고리즘

  - 인접좌표 (2차원 평면기준) 3개의 좌표에서 on 상태일경우 해당좌표는 on.
  - 인접좌표 2개의 좌표가 on 일경우 해당좌표는 상태유지 (on -> on , off -> off)
  - 그 이외의 경우는 모든 해당 좌표는 off

  알고리즘을 도식화.

  ```javascript
  var map = []; // n 사이즈의 맵을 정의해야 함

  var on_pattern = [[a,b],[a',b'],[a'',b'']];
  var cycle = n;

  for (var i = 0; i < n; i++) {
  conways();
  }

  function conways() {
  on_pattern = chklife(on_pattern, map); //on여부를 체크하고 on 패턴을 다시 리턴한다.
  }
  ```

### 다익스트라 알고리즘 (dijkstra 네덜란드인이므로 데이크스트라라고 명하는게 맞을듯)
평면상에서 어떤 위치에서 다른 위치까지 이동할때 각 지점간의 이동가중치 최소경로를 찾는 알고리즘 (쉽게 말하자면 네비게이션 최단경로 찾기 알고리즘)
  - 동작원리
    - 각지점에서 다른지점으로의 이동방법은 무조건 한가지이다.(중복될경우 최소경로만 인정)
    - 각 지점간의 이동 가중치를 자료구조화 한다 (배열이 되었든 오브젝트가 되었던간 사용하기 쉽게 재가공)
    - 출발점과 종료지점을 정한다
    - 출발점에서 종료지점까지 거치는 모든 지점을 선택한다
    - 각 노드의 이동 가중치합을 비교하며 경로 선택을 시킨다
    - 종료 최소 경로와 가중치를 찾는다.

```javascript
// complete the function so that it returns the fastest route
function navigate(numberOfIntersections, roads, start, finish) {
  var distan = [], chker = [], i = 0;
  console.log(roads);
  console.log(start,finish);
  //return [0,1,3,2,4];
  for(i =0;i < numberOfIntersections; i++) {
    distan.push([[],Infinity]);
    chker.push([i,Infinity,false]);
  }
  //start
  //distan[start][0].push(start);
  distan[start][1] = 0;
  aka(start, 0);
  seeing(start);

  function aka(ind, dis) {
    for (var aa in chker) {
      if (chker[aa][0] === ind) {
        chker[aa][1] = dis;
      }
    }
  }
  function chk(ind){
    for (var aa in chker) {
      if (chker[aa][0] === ind) {
        chker[aa][2] = true;
      }
    }
  }
  function seeing (i) {
    for (var obj in roads) {
      if (roads[obj].from === i) {
        if(distan[roads[obj].to][1]  > distan[i][1] + roads[obj].drivingTime) {
          distan[roads[obj].to][1] = distan[i][1] + roads[obj].drivingTime;
          distan[roads[obj].to][0] = distan[i][0].slice(0);
          distan[roads[obj].to][0].push(roads[obj].to);
          aka(roads[obj].to, distan[roads[obj].to][1]);
        }
      }
    }
    chk(i);
    chker.sort(sorta);
    for (var aa in chker) {
      if (chker[aa][2] === false) {
        return seeing(chker[aa][0]);
      }
    }

  }
  function sorta(a, b) {
    return a[1] - b[1];
  }
  console.log(distan[finish][0]);
  return distan[finish][0];
}

```

### 유클리드 호제법 O(n)
두 수나 다항식의 최대 공약수를 구하는 알고리즘
 - 입력으로 두 수 m,n(m>n)이 들어온다.
 - n이 0이라면, m을 출력하고 알고리즘을 종료한다.
 - n이 m을 나누어 떨어지면, n을 출력하고 알고리즘을 종료한다.
 - 그렇지 않으면, m을 n으로 나눈 나머지를 새롭게 m에 대입하고, m과 n을 바꾸고 윗것으로 반복
```c
int gcd(int a, int b)
{
	return b ? gcd(b, a%b) : a;
}
```
```python
def gcd(m,n):
	if m < n:
		m, n = n, m
	if n == 0:
		return m
	if m % n == 0:
		return n
	else:
		return gcd(n, m%n)
```

## 지금은 알아둘(써먹을) 필요는 없지만 어딘가에서 항상 살아숨쉬고 있는 알고리즘들.

- 물론 언젠가 코어개발자가 된다면 혹은 새로운 차원 변환 알고리즘들이 쏟아진다면 이것들은 내다버리고 그걸로 갈아타야... (음...)

### 버블정렬

```javascript
int* bubble_sort(int *array, int n) {
    int i, j, temp;
    for(i = 0; i < (n-1); i++) { //실행 횟수 (n-1)회 반복
        for(j = 0; j < (n-1)-i; j++) { //i가 1번 실행될 때마다 맨 끝에서 차례차례 정렬이 되기 때문에 마지막에서 -i를 해주어 연산을 줄임
            if(array[j] > array[j+1]) { //인덱스의 값이 그 다음 인덱스의 값보다 클 경우
                /* 수를 뒤바꾼다 */
                temp = array[j];  
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array; //배열을 반환
}
```

### 선택정렬

```javascript
for(; i < sort.length-1; i++) {
    for(j = i + 1; j < sort.length; j++) {
        if(sort[i] > sort[j]) {
            temp = sort[i]; // 큰 값을 잠시 임시변수에 저장
            sort[i] = sort[j]; // 작은 값을 앞으로 옮김
            sort[j] = temp; // 임시변수에 넣어둔 것을 뒤로 옮김
        }
    }
}
```

### 삽입정렬

```javascript
function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}
```

### 병합정렬

```javascript
function mergeSort(items){

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));

    // Add the arguments to replace everything between 0 and last item in the array
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
}
```

### 퀵정렬

- 대부분 이 정렬을 쓰고 있다. 다음의 예제는 멍청한 자바스크립트의 정렬 문제에 대한 수정적용...

  ```javascript
  array.sort(function (a, b)
  {
        return a-b;
  });
  ```

### 힙정렬

```javascript
var heapSort = (function () {
   /**
    * Finds the correct place of given element in given max heap.
    *
    * @private
    * @param {Array} array Array.
    * @param {Number} index Index of the element which palce in
    * the max heap should be found.
    * @param {Number} heapSize Size of the heap.
    * @param {function} cmp Comparison function.
    */
   function heapify(array, index, heapSize, cmp) {
     var left = 2 * index + 1;
     var right = 2 * index + 2;
     var largest = index;
     if (left < heapSize && cmp(array[left], array[index]) > 0) {
       largest = left;
     }
     if (right < heapSize && cmp(array[right], array[largest]) > 0) {
       largest = right;
     }
     if (largest !== index) {
       var temp = array[index];
       array[index] = array[largest];
       array[largest] = temp;
       heapify(array, largest, heapSize, cmp);
     }
   }
   /**
    * Builds max heap from given array.
    *
    * @private
    * @param {Array} array Array which should be turned into max heap.
    * @param {function} cmp Comparison function.
    * @return {Array} array Array turned into max heap.
    */
   function buildMaxHeap(array, cmp) {
     for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
       heapify(array, i, array.length, cmp);
     }
     return array;
   }
   /**
    * Heapsort. Turns the input array into max
    * heap and after that sorts it.<br><br>
    * Time complexity: O(N log N).
    *
    * @example
    *
    * var sort = require('path-to-algorithms/src' +
    * '/sorting/heapsort').heapSort;
    * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
    *
    * @public
    * @module sorting/heapsort
    * @param {Array} array Input array.
    * @param {Function} cmp Optional. A function that defines an
    * alternative sort order. The function should return a negative,
    * zero, or positive value, depending on the arguments.
    * @return {Array} Sorted array.
    */
   return function (array, cmp) {
     cmp = cmp || comparator;
     var size = array.length;
     var temp;
     buildMaxHeap(array, cmp);
     for (var i = array.length - 1; i > 0; i -= 1) {
       temp = array[0];
       array[0] = array[i];
       array[i] = temp;
       size -= 1;
       heapify(array, 0, size, cmp);
     }
     return array;
   };
 });
```

### 팩토리얼
```javascript
//for memoization
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

```

### 조합

```javascript
  var f = [];
  function factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  }
  /**
    Make Combination Array 
    using factorial
  */
  function combination (arr, k) {
    var leng = arr.length;
    var genarr = [];
    var temparr = [];
    var Maxi = factorial(leng) / (factorial(leng - k) * factorial(k));


    for (var i = 0; i < k; i++) {
      temparr.push(i);
    }

    for (var i = 0; i < Maxi; i++) {
      genarr.push(temparr.slice(0));
      temparr[k-1] = temparr[k-1] + 1;
      //addorder
      for (var add = k-1; add > 0; add--) {
        if (temparr[add] > leng - (k-add)) {
          temparr[add-1] = temparr[add-1] + 1;
          temparr[add] = -1;
        }
      }
      for (var add = 1; add < k; add++) {
        if (temparr[add] === -1) {
          temparr[add] = temparr[add-1] + 1;
        }
      }
    }
    genarr = genarr.map((a,i)=>{
      return a.map((b,z)=>{
        return arr[b];
      });
    });

    return genarr;
  }
```
재귀 활용
```
function kSubsetPermutations(set, k, partial) {
    if (!partial) partial = [];                 // set default value on first call
    for (var element in set) {
        if (k > 1) {
            var set_copy = set.slice();         // slice() creates copy of array
            set_copy.splice(element, 1);        // splice() removes element from array
            kSubsetPermutations(set_copy, k - 1, partial.concat([set[element]]));
        }                                       // a.concat(b) appends b to copy of a
        else document.write("[" + partial.concat([set[element]]) + "] ");
    }
}
kSubsetPermutations([1,2,3,4,5], 3);
```
