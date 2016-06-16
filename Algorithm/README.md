#이것저것배운 기법들 (추상화나 메소드 설계기법 등)

###메모이제이션 기법
 - 함수결과를 기록해서 저장해뒀다가 필요하면 바로꺼내서 쓸수있는 방법이다 재귀호출할때 쓰면 편리할것 같지만 잘은 모르겠다... 어쨌건 cpu 성능이 낮고 메모리가 클수록 쓸만한 방법
 - 엄청나게 긴 배열에서 특정 수를 찾을때 indexof 보다 빠르게 찾을수 있었다. (의외라서 놀라움...)
```
  var func = function (a) { ... };
  var a = { func(2) : 44, func(3) : 55, ......};
```

###커링 기법
  - 함수의 인자를 분리시켜서 중첩함수로 만드는 기법 대체로 들어가는 인자가 같은 타입의 인자이고 반복되는 경우가 많을때 사용하는 것이 좋다.
  - 커링을 사용할때에는 함수가 중첩되므로 어찌보면 메모이제이션의 반대로 메모리가 작고 cpu성능이 월등할 경우에 사용하는것이 좋음.
```
  //자바스크립트 프로토 타입
  Function.prototype.curry = function() {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this;
    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
  }
```

###체이닝 기법
  - 메소드 체인 기법이라고 생각해도 될듯.
  - 객체를 리턴해서 객체안에 메소드들을 정의 해주면 된다 메소드의 리턴 역시 객체로
  - 제이쿼리가 체이닝 기법으로 동작하는 대표적인 예

  ```
    var Chain = function () {
      this.aa = function () {
        ...
        return this;
      },
      this.bb = function () {
        ...
        return this;
      }
    };
  ```

#이것저것 줏어 넣은 알고리즘들.
멍청하고 머리가 나빠서 이렇게 적어두지 않으면 결코 찾아낼수 없는 것들.

###콘웨이의 생명게임
특정 좌표를 하나의 점으로 두고 이 점이 어떤 조건하에서 주기적인 변화를 가지게 될때 이것의 변화가 패턴을 가지거나 혹은 유지 발산 소멸되는 것.

  - 알고리즘
    - 인접좌표 (2차원 평면기준) 3개의 좌표에서 on 상태일경우 해당좌표는 on.
    - 인접좌표 2개의 좌표가 on 일경우 해당좌표는 상태유지 (on -> on , off -> off)
    - 그 이외의 경우는 모든 해당 좌표는 off

  알고리즘을 도식화.
```
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


##지금은 알아둘(써먹을) 필요는 없지만 어딘가에서 항상 살아숨쉬고 있는 알고리즘들.
- 물론 언젠가 코어개발자가 된다면 혹은 새로운 차원 변환 알고리즘들이 쏟아진다면 이것들은 내다버리고 그걸로 갈아타야... (음...)

###버블정렬
```
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

###선택정렬
```
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

###삽입정렬
```
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
        for (j=i-1; j > -1 &#038;&#038; items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}

```

###병합정렬
```
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

###힙정렬
```
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
```

###퀵정렬
- 대부분 이 정렬을 쓰고 있다. 다음의 예제는 멍청한 자바스크립트의 정렬 문제에 대한 수정적용...
```
array.sort(function (a, b)
{
        return a-b;
});
```   

###이진트리
한개의 값에서 최대 두개의 값을 가지는 노드를 연속적으로 만드는 트리 형태에 따라 완전 포화 불완전 등등으로 나뉨.
트리의 검색 방법들중 전위 중위 후위 순회 방법이 있으며 대체로 데이터 저장 방식 알고리즘으로 쓰인다. (메모리에 직접 액세스 시키는 알고리즘을 설계하지 않는한 굳이 이진트리를 손대게 될일은 없을것이다.
만약 현대의 프로그래밍 언어로 이진트리를 설계하라는 사람이 있으면 그 사람과는 가까이 지낼 필요가 없다. 물론 알고리즘을 알고 있냐는 건 다른이야기지만.)
  - 파생으로 힙이 있는데 이게 가장 유명하다. 힙소트 (인생은 줄세우기의 연속이다.)

###배열
밥먹듯이 쓰는것 사실 메모리 영역 할당과도 같은것이다. 기차랑 비슷한것. 덕후들이 괜히 기차를... (읍읍) 자료구조에서 쓰이는 배열과 프로그래밍에서 쓰이는 배열은 다르다고 봐도 무방하다. (실제로 배열에 삽입이나 추가가 가능한게 현실... 이지만 C랑 C++에서는 사이즈를 바꾸어 줘야 한다 동적으로 다른 고수준 언어에서는 그배열이 이배열이 아니라는것)

###링크드리스트
DB 설계에서 자주 쓰일지도 모를 알고리즘
  - 단순연결리스트 : 값에  다음 값의 참조(주소)를 추가한다.
  - 이중연결 리스트 : 값에 전/후의 참조(주소)를 추가한다.
  - 원형 : 끝과 처음을 연결시킨다.
