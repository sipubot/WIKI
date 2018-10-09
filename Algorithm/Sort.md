# 정렬

## 위상 정렬

한국어 위키에는 개념만 있고 자세한 알고리즘 소개가 없다.
[위키](https://en.wikipedia.org/wiki/Topological_sorting)

## 버블정렬

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

## 선택정렬

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

## 삽입정렬

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

## 병합정렬

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

## 퀵정렬

- 대부분 이 정렬을 쓰고 있다. 다음의 예제는 멍청한 자바스크립트의 정렬 문제에 대한 수정적용...

  ```javascript
  array.sort(function (a, b)
  {
        return a-b;
  });
  ```

## 힙정렬

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
