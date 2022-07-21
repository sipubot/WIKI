# 탐색 알고리즘

>자료구조로 탐색성능을 높이는 것은 자료구조에서 찾을것

## 일치

### 부분 트리 일치 찾기

> 연산 기호와 재귀를 확실히 이해할것

```javascript
 var isSubtree = function(s, t) {
   if (!s) return !t;
   return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
   if (!root1 || !root2) return !root1 && !root2;
   if (root1.val !== root2.val) return false;
   return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}
```

## 경로

### 탐색 우선순위

>탐색우선 순위란 알고리즘 설계시 결과값을 찾을때의 알고리즘 설계를 하나의 프로세스를 순자적으로 할것인지 동시에 여러개의 프로세스를 실행시켜 찾을것인지 결정하는 것이다. 대체로 실무에서는 둘다의 효율성을 고려해서 설계하겠지만 어느것이 우선이냐는 찾으려는 결과값과 경우의 수에 의해서 결정된다.

### A스타 알고리즘 (작성대기)

일단은 작성 준비

### Stable marriage problem (SMP)

안정적인 결합에 관한 알고리즘
    최악을 제거하면서 안정도를 늘리는 방법이다. (따라서 최상의 커플이 나올수도 안나올수도 있다.) 소모시간은 O(n^2) 으로 논문이 나와있음
[위키](https://en.wikipedia.org/wiki/Stable_marriage_problem)
[번역](http://cubistkang.tistory.com/62)
[파이선](https://github.com/suwon419/cubist/blob/etc/src/python/etc/marriage.py)

## 다익스트라 알고리즘 (dijkstra 네덜란드인이므로 데이크스트라라고 명하는게 맞을듯)

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

```javascript
//rojjeta code 
const dijkstra = (edges,source,target) => {
    const Q = new Set(),
          prev = {},
          dist = {},
          adj = {}
 
    const vertex_with_min_dist = (Q,dist) => {
        let min_distance = Infinity,
            u = null
 
        for (let v of Q) {
            if (dist[v] < min_distance) {
                min_distance = dist[v]
                u = v
            }
        }
        return u
    }
 
    for (let i=0;i<edges.length;i++) {
        let v1 = edges[i][0], 
            v2 = edges[i][1],
            len = edges[i][2]
 
        Q.add(v1)
        Q.add(v2)
 
        dist[v1] = Infinity
        dist[v2] = Infinity
 
        if (adj[v1] === undefined) adj[v1] = {}
        if (adj[v2] === undefined) adj[v2] = {}
 
        adj[v1][v2] = len
        adj[v2][v1] = len
    }
 
    dist[source] = 0
 
    while (Q.size) {
        let u = vertex_with_min_dist(Q,dist),
            neighbors = Object.keys(adj[u]).filter(v=>Q.has(v)) //Neighbor still in Q 
 
        Q.delete(u)
 
        if (u===target) break //Break when the target has been found
 
        for (let v of neighbors) {
            let alt = dist[u] + adj[u][v]
            if (alt < dist[v]) {
                dist[v] = alt
                prev[v] = u
            }
        }
    }
 
    {
        let u = target,
        S = [u],
        len = 0
 
        while (prev[u] !== undefined) {
            S.unshift(prev[u])
            len += adj[u][prev[u]]
            u = prev[u]
        }
        return [S,len]
    }   
}
```

## 최대합 찾기 (Kadane's Algorithm)

> maximum subarray problem is the task of finding a contiguous subarray with the largest sum
> 단순히 생각해서 부분합이 양수일경우 전체합은 더 커진다는 사실을 바탕으로 O(n)으로 계산하는것

- [WIKI](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
- [참조](https://www.techiedelight.com/maximum-subarray-problem-kadanes-algorithm/)
- [참조2](http://theoryofprogramming.com/2016/10/21/dynamic-programming-kadanes-algorithm/)

### 최대합을 구할경우

```python
def max_subarray(A):
    max_ending_here = max_so_far = A[0]
    for x in A[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
```

### 차합을 구할경우

```javascript
var maxProfit = function(prices) {
    let maxProfit = 0;
    let potentialProfit = 0;
    let current = prices[0];
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        current = prices[i];
        if(current < minPrice) minPrice = current;
        else potentialProfit = current - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
};
```

## 경우의 수

### 팩토리얼

> 가지수를 찾을 때 많이 사용됨

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

> 경우의 수

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

``` javascript
//rojetta code
function combinations(arr, k){
    var i,
    subI,
    ret = [],
    sub,
    next;
    for(i = 0; i < arr.length; i++){
        if(k === 1){
            ret.push( [ arr[i] ] );
        }else{
            sub = combinations(arr.slice(i+1, arr.length), k-1);
            for(subI = 0; subI < sub.length; subI++ ){
                next = sub[subI];
                next.unshift(arr[i]);
                ret.push( next );
            }
        }
    }
    return ret;
}
kSubsetPermutations([1,2,3,4,5], 3);
```

### 순열

>경우의 수 순열 (순서가 필요할 경우)

```javascript
permutations = function(arr){
  var permArr = [],
      usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };
  return permute(arr);
};
```

### 제곱수의 합

> 모든 제곱수를 4번 조합하면 모든 자연수를 표현 할수 있다.

- 따라서 다음의 방법으로 몇번의 조합으로 그 수가 표현되는지는 다음과 같이 찾을수 있음

```javascript
function sumOfSquares(n) { 
  if (Math.sqrt(n) % 1 === 0) return 1;
  while ( (n & 3) == 0 ) {
    n >>= 2;
  }
  if ((n & 7) == 7) {
    return 4;
  }
  var sq = Math.floor(Math.sqrt(n));
  for (var i = 1; i <= sq; i++) {
    if(Math.sqrt(n-i*i) % 1 === 0) {
      return 2;
    }
  }
  return 3;
}
```
