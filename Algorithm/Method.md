# 메서드

>프로그래밍 에서 말하는 메서드는 단순 데이터가 입력되고 또다른 데이터가 출력되는 어떤 객체를 의미하지만 (이를테면 a+b를 출력하는 함수) 여기에서는 수학적으로 자주 사용하는 메서드나 알고리즘을 바로 적용할수 있는 메서드들을 적기로 함

## [위키정리](https://en.wikipedia.org/wiki/List_of_algorithms)

### 브렌츠(함수 참조사이에서), 플로이드(데이터 리스트에서) 알고리즘

>싱글링크드리스트의 순환(사이클)을 찾아내는 알고리즘 이라고 해석하면 되는건가. 토끼와 거북이 알고리즘으로 많이들 해석하고 있군

- [위키](https://en.wikipedia.org/wiki/Cycle_detection)
- [자바스크립트](https://gist.github.com/borgar/3317728)
- [번역](http://egloos.zum.com/minjang/v/1687021)

### 난수 생성 알고리즘

>[위키](https://namu.wiki/w/%EB%82%9C%EC%88%98%EC%83%9D%EC%84%B1)

### 지도 색칠 알고리즘

>[위키](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%84_%EC%83%89%EC%B9%A0)

### 헝가리안 알고리즘

>Hopcroft–Karp algorithm 이라고 이것의 탐색시간을 줄인것도 존재 한다. 구현이 복잡해서 잘쓰지 않는듯.
>
>최적화 관련 메소드라고 해도되고 알고리즘이라고 해도 되고

- [위키](https://en.wikipedia.org/wiki/Hungarian_algorithm)
- [참조위키](http://wiki.yonseics.net/index.php/%ED%97%9D%EA%B0%80%EB%A6%AC%EC%95%88_%EB%A9%94%EC%86%8C%EB%93%9C)
- [번역](http://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040101&docId=64696783&qb=x%20uwobiuvsgguN680rXl)
- [씨](https://github.com/maandree/hungarian-algorithm-n3/blob/master/hungarian.c)
- [파이선](https://github.com/tdedecko/hungarian-algorithm)
- [자바스크립트](https://github.com/addaleax/munkres-js)

### Force-directed graph drawing

>요즘 한창 비주얼로 뜨고 있는 것
>
>d3에 내장되어 있는 기능이라 개념만 알아도 괜찮을듯 싶다.
>
>json을 이용해서 트리를 그래프로 변환시켜줌 문제는 응집도를 볼때 쓰는 것이라 구체적인 데이터를 보여주는데는 쓰면 안된다. (물론... 한국은 안그렇다.)
[위키](https://en.wikipedia.org/wiki/Force-directed_graph_drawing)

### pageRank 알고리즘

>워낙 유명하니.. 위키에도 자세히 나와있다. 개념만 알아두는것이 좋다. 물론 영어위키를 참조하길...(한글 위키는 정말 부실해.)
[위키](https://en.wikipedia.org/wiki/PageRank)

### 유량 알고리즘

>(네트워크 부하 분산 관련에서 쓰일듯 하지만 아직 이런 알고리즘을 쓸만큼 코어 개발쪽은 해본적이 없다. 아쉽네.)

- [Dinic's algorithm](https://en.wikipedia.org/wiki/Dinic%27s_algorithm)
- [Edmonds–Karp algorithm](https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm)
- [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)

### 최적해 찾기 알고리즘

>시스템의 성능과 최적값 사이의 문제 (그래픽 엔진의 경우에 자주 쓰일듯 함)

- [가우스 소거 Gaussian elimination](https://ko.wikipedia.org/wiki/%EA%B0%80%EC%9A%B0%EC%8A%A4_%EC%86%8C%EA%B1%B0%EB%B2%95)
- [github](https://github.com/itsravenous/gaussian-elimination/blob/master/gauss.js)

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

- [경사하강 gradient descent](https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%82%AC_%ED%95%98%EA%B0%95%EB%B2%95)
    [example](https://jsfiddle.net/littlegustv/rw9bbehc/)
    [참고자료](http://darkpgmr.tistory.com/133)

- [켤레기울기 Conjugate Gradient](https://ko.wikipedia.org/wiki/%EC%BC%A4%EB%A0%88%EA%B8%B0%EC%9A%B8%EA%B8%B0%EB%B2%95)

## 퀴즈 풀면서 눈여겨본 알고리즘

### 콘웨이의 생명게임

>특정 좌표를 하나의 점으로 두고 이 점이 어떤 조건하에서 주기적인 변화를 가지게 될때 이것의 변화가 패턴을 가지거나 혹은 유지 발산 소멸되는 것.

- 인접좌표 (2차원 평면기준) 3개의 좌표에서 on 상태일경우 해당좌표는 on.
- 인접좌표 2개의 좌표가 on 일경우 해당좌표는 상태유지 (on -> on , off -> off)
- 그 이외의 경우는 모든 해당 좌표는 off

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

### 최소 공배수

```javascript
var lcm =((a, b)=> Math.abs(a * b) / gcd(a, b));
```

### 최대 공약수

>두 수나 다항식의 최대 공약수를 구하는 알고리즘

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

### 버로우 필러 변환

> 특정 문자열을 행렬 변환으로 간단하게 암호화 (같은 문자로만 이루어져 있으면 효과는 없다)
> 행렬과 정렬을 이용한 방식 원리만 알면 간단히 풀수 있음.

[위키](https://ko.wikipedia.org/wiki/%EB%B2%84%EB%A1%9C%EC%9A%B0%EC%A6%88-%ED%9C%A0%EB%9F%AC_%EB%B3%80%ED%99%98)

```javascript
function encode(s) {
  var sarr = s.split('');
  var mat = Array.apply(null,Array(sarr.length)).map((a,i)=>{
    return s.slice(i).concat(s.slice(0,i));
  });
  mat = mat.sort();
  var re = mat.map(a=>a[a.length-1]).join('');
  return [re,mat.indexOf(s)];
}

function decode(s,idx) {
  if (s.length === 0) return '';
  var mat = Array.apply(null,Array(s.length)).map((a,i)=>'');
  var s = s
  for (var i = 0; i < s.length; i++) {
    for (var z = 0; z < mat.length ; z++) {
      mat[z] = s[z] + mat[z];
    }
    mat = mat.sort();
  }
  mat.sort()
  return mat[idx];
}
```

### 비트 연산

비트연산으로 덧셈 하기

```javascript
function add (x, y) {
    while (y != 0)
    {
        var carry = x & y;  
        x = x ^ y; 
        y = carry << 1;
    }
    
    return x;
}
```

## 암호화 관련

암호화 기법에서 가장 많이 쓰는 메서드는 바로 gcd 이다. 모듈러 연산이라고 부르는 이것은 소수를 기반으로 해서 비트 연산으로 문자열을 인코딩 하게 되면
작은 변화값 많으로 큰 변화가 일어 나기 때문에 암호해독에 시간이 오래걸리고 쉽게 해독 되지 않기 때문이다. 그래서 암호 관련 자료를 분석하기 위해선 모듈러 연산은 알아둘 필요가 있다.

### MD5

> 해시 알고리즘 (주로 파일 fatal 체크용으로 쓰인다.)
>
> 언제나 그렇지만 연산속도의 발달은 '기술'을 '유물'로 만든다.

- [위키](https://ko.wikipedia.org/wiki/MD5)
- [개그용도](https://namu.wiki/w/MD5%20%EB%B0%B0%ED%8B%80)

### SHA-3

SHA-2, SHA-1 등은 충돌 가능성이 존재한다고 알려짐
SHA-2 는 SHA-256, SHA-512으로 변환 되어 사용되고 있다.

- [위키](https://en.wikipedia.org/wiki/SHA-3) 한글 위키는 설명이 부족하여 링크 하지 않음 개념등 사용된 기술에 대해 적혀 있음
- 2015년에 채택된 기술이라 아직 전반적인 사용이 이루어지고 있진 않다.
- 개인적으로 홈페이지 비밀번호로 사용중임 - 사실 암호화 보단 http 인증 연장을 못하는게 더 문제인 상황이지만..
