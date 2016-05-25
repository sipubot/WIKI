# 굉장히 흔히 쓰이는 알고리듬 정리

- 버블소트
  ```javascript
    for (loop = 0; loop < tempCount - 1; loop++) {
      for (i = 0; i < tempCount - 1 - loop; i++) {
          if (temp[i] > temp[i+1]) {
              hold = temp[i];
              temp[i] = temp[i+1];
              temp[i+1] = hold;
          }
      }
    }
  ```
- 삽입
```javascript
  var i, j, remember;
   for ( i = 1; i < n; i++ )
   {
     remember = data[(j=i)];
     while ( --j >= 0 && remember < data[j] )
         data[j+1] = data[j];
     data[j+1] = remember;
   }
  }
```
- 퀵
```javascript
  function quickSort(items, left, right) {

      var index;

      if (items.length > 1) {

          left = typeof left != "number" ? 0 : left;
          right = typeof right != "number" ? items.length - 1 : right;

          index = partition(items, left, right);

          if (left < index - 1) {
              quickSort(items, left, index - 1);
          }

          if (index < right) {
              quickSort(items, index, right);
          }

      }
    return items;
  }
```
