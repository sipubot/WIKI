# 탐색 알고리즘

>자료구조로 탐색성능을 높이는 것은 자료구조에서 찾을것

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

## 경우의 수

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
