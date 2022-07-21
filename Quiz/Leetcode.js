
/**https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    var dub = arr.map(a=>a*2)
    
    return arr.some((b,i)=>dub.indexOf(b)>-1 && dub.indexOf(b) != i);
};

/**https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    return nums.some((_,i)=>nums.indexOf(_)!== i)
};
/**https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    return nums.filter(_=> (""+_).length % 2 === 0).length
};

/** https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1391/
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    var re = new Array(rooms.length).fill(false);
    function visi(pos) {
        if (re[pos]) {
            return;
        } else {
            re[pos] = true;
            rooms[pos].map(_=>{
                visi(_);
            })
        }
    }
    visi(0);
    return re.every(_=>_==true);
};

/** https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1363/
 * @param {number[]} temperatures
 * @return {number[]}
 * [73,74,75,71,69,72,76,73]
 * [69,71,72,73,73,74,75,76]
 */
 var dailyTemperatures = function(temperatures) {
    var re = new Array(temperatures.length).fill(0);
    var __ = [];
    for (var i = 0; i < temperatures.length; i++) {
        __ = __.filter((_)=>{
            if(temperatures[_] < temperatures[i]) {
                re[_] = i - _;
                return false;
            } else {
                return true;
            }
        });
        __.push(i);
    }
    return re;
};


/** https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1393/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    var visited = new Array(image.length).fill([]).map(() => new Array(image[0].length).fill(false));

    function go(y, x, value, newvalue) {
        if (x < 0 || y < 0 || y > image.length -1 || x > image[0].length ) {return};
        if (visited[y][x]) return;
        visited[y][x] = true;
        if (image[y][x] === value) {
            image[y][x] = newvalue;
            go(y-1,x,v, newvalue);
            go(y,x-1,v, newvalue);
            go(y+1,x,v, newvalue);
            go(y,x+1,v, newvalue);
        }
    }
    var v = image[sr][sc];
    go(sr,sc, v, newColor);
    return image;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    if (n == 1)  return 1;
    var c = 1;
    while (n >= c) {
        n = n - c;
        c++;
    }

    if (n == 0) return 1;
    else {
        var re = 1;
        while (n > 0) {
            n--;
            re = re * c;
            c--;
        }
        return re;
    }
    
};

var kthGrammar = function (N, K) {
    if (N == 1) return 0;
    if (K % 2 == 0) return kthGrammar(N - 1, K / 2) == 0 ? 1 : 0;
    else return kthGrammar(N - 1, (K + 1) / 2) == 0 ? 0 : 1;
  };

/** https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    var rem = nums.length - n;
    var re = [];
    for (var i = 0; i < Math.max(n,rem); i++) {
        if (nums[i]) {
            re.push(nums[i]);
        }
        if (nums[i+n]) {
            re.push(nums[i+n]);
        }
    }
    return re;
};
/** https://leetcode.com/problems/build-array-from-permutation
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    return nums.map((a,i)=>nums[a])
};              
/**
 * https://leetcode.com/problems/container-with-most-water/submissions/
 * @param {*} H 
 * @returns 
 */
const maxArea = (H) => {
    let left = 0, right = H.length - 1, max = 0;
    while (left < right) {
      max = Math.max(max, Math.min(H[left], H[right]) * (right - left));
      if (H[left] < H[right]) left++; // Left is smaller, try a new left line
      else right--; // Right is smaller, try a new right line
    }
    return max;
  };

/** https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
    var sum = arr.reduce((s,a)=>s+a,0);
    var harf = sum * 0.5;
    if (Math.round(harf)!== harf) return false;
    sum = 0;
    for (var i = 0; sum <= harf; i++) {
        sum += arr[i];
    }
    if (sum == harf) {return true;}
    else  {return false;}
}
/**
 * https://leetcode.com/problems/find-common-characters/submissions/
 * 
 */
 var commonChars = function(words) {
    var al = "abcdefghijklmnopqrstuvwxyz".split('');
    var idx = 0;
    var re = [];
    var wdlen = words.length;
    var wd = words.map(a=>a.split('').sort());
    while (wd.some(v=>v.length > 0)) {
        var ct = 0
        wd = wd.map(a=>{
            if (a[0] == al[idx]) {
                ct++;
                a.shift();
                return a;
            } else {
                return a;
            }
        });
        if (ct === 0) {
            idx++;
        } else if (ct == wdlen) {
            re.push(al[idx]);
        }
    }
    return re;
};
//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length-2; ) {
        if ( nums[i] === nums[i+2]) {
            nums.splice(i,1);
        } else {
            i++;
        }
    }
    return nums.length
};
// https://leetcode.com/submissions/detail/217966989/
var countBinarySubstrings = function(s) {
    var ans = 0, prev = 0, cur = 1;
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i-1) != s.charAt(i)) {
            ans += Math.min(prev, cur);
            prev = cur;
            cur = 1;
        } else {
            cur++;
        }
    }
    return ans + Math.min(prev, cur);
};
// 싱글 넘버.
// https://leetcode.com/problems/single-number/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((x, y) => x ^ y);
};
//비트 단위 배타적 논리합 연산 대입 	x ^= y 	x = x ^ y
// https://leetcode.com/submissions/detail/179993117/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0;
  
  var maxdep = 0;
  function dep (n, node) {
      if (node == null) {
      } else {
          maxdep =  maxdep > n ? maxdep : n;
          if (node.left !== null) {
              dep (n+1, node.left);
          }
          if (node.right !== null) {
              dep (n+1, node.right);
          }
          
      }
  }
  dep(0,root);
  
  return maxdep+1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    var mid = Math.floor(nums.length / 2);
    var root = new TreeNode();
    root.val = nums[mid];
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};
/**
 * 트리 비교 (대칭형)
 */
var isSymmetric = function(root) { // Just to detect if every level is palindrome
    if(!root) return true;
    
    var curQ = [root.left, root.right],
        subQ = [],
        count = 0; // count nulls in curQ
    while(curQ.length){
        var len = curQ.length;
        for(var i = 0; i < curQ.length; i ++){
            if(!curQ[i] && !curQ[len - 1 - i]){
                count ++; // shouldn't be += 2 as it'll loop till the end of the queue and catch the other null
            }else{
                if(!(curQ[i] && curQ[len - 1 - i])) return false;
                if(curQ[i].val !== curQ[len - 1 - i].val) return false;
                subQ.push(curQ[i].left, curQ[i].right);
            }
        }
        if(count === len) break; // stop the loop if every elem in curQ is null
        
        curQ = subQ;
        subQ = [];
        count = 0;
    }
    return true;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    var re = false;
    var tsums = [];
    function ts(tree, s) {
        if (!tree.left && !tree.right) {
            tsums.push(s+tree.val);
        } else {
            if (tree.left) {
                ts(tree.left,tree.val+s);
            }
            if (tree.right) {
                ts(tree.right,tree.val+s);
            }
        }
    }
    ts(root,0);
    return tsums.some(a=>a===sum);
};
//https://leetcode.com/problems/jewels-and-stones/description/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var c = 0;
    J.split('').map(a=>{
        c = c + S.split('').filter(b=>b===a).length;
    });
    return c;
}
//https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var sumbefore = grid.reduce((s,a)=>s + a.reduce((ss,b)=>ss+b,0),0);
    
    var ymax = grid.map((a,i)=>Math.max(...a));
    var xmax = grid[0].map((a,i)=> Math.max(...grid.map(b=>b[i])));
    
    var build = grid.map((a,x)=>{
        return a.map((b,y)=>{
            return xmax[x] < ymax[y] ? xmax[x] : ymax[y];
        });
    });
    var sumafter = build.reduce((s,a)=>s + a.reduce((ss,b)=>ss+b,0),0);
    return sumafter - sumbefore;
};
//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    while(S.indexOf('()') > -1) {
        S = S.split('()').join('');
    }
    return S.length;
};
//https://leetcode.com/problems/to-lower-case/description/
var toLowerCase = function(str) {
    return str.split('').map(a=> a.charCodeAt(0) <= 90 && a.charCodeAt(0) > 64 ? String.fromCharCode(a.charCodeAt(0)+32) : a ).join('');
};
//https://leetcode.com/problems/sort-array-by-parity/description/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.filter(a=>a%2 === 0).concat(A.filter(a=>a%2 === 1));
};
//https://leetcode.com/problems/hamming-distance/description/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xs = x.toString(2).padStart(32,'0').split('');
    var ys = y.toString(2).padStart(32,'0').split('');
    return xs.filter((a,i)=>a !== ys[i]).length;
};
//https://leetcode.com/problems/robot-return-to-origin/description/
var judgeCircle = function(moves) {
    //이것도 의외로 느리네..
    var u = moves.match(/U/g) || 0;
    var d = moves.match(/D/g) || 0;
    var r = moves.match(/R/g) || 0;
    var l = moves.match(/L/g) || 0;
    return u.length === d.length && r.length === l.length
};
//https://leetcode.com/problems/combination-sum/description/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var re = [];
    function summ (arr) {
        if (arr.reduce((s,a)=>s+a,0)===target) {
            re.push(arr.sort());
        } else if (arr.reduce((s,a)=>s+a,0) > target) {
            return;
        } else {
            candidates.map(a=>{
                summ(arr.concat([a]));
            });
        }
    }
    summ([]);
    re = re.map(a=>a.join());
    
    return Array.from(new Set(re)).map(a=>a.split(',').map(b=>+b));
    
};
//https://leetcode.com/problems/reverse-bits/description/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return parseInt(((n.toString(2)).padStart(32,'0')).split('').reverse().join(''),2)
};
//https://leetcode.com/problems/number-of-1-bits/description/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').filter(a=>a=='1').length
};
//https://leetcode.com/problems/house-robber/description/
/** DP문제가 아니었음
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var a = 0,b = 0;
    
    for (var i=0; i<nums.length; i++)
    {
        if (i%2==0)
        {
            a = Math.max(a+nums[i], b);
        }
        else
        {
            b = Math.max(a, b+nums[i]);
        }
    }
    
    return Math.max(a, b);
  
};
// https://leetcode.com/problems/happy-number/
/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
   var rep = [];
   var counter = 0;
   while(rep.indexOf(n) === -1 && counter < 100) {
       counter++;
       rep.push(n);
       n = (n+'').split('').map(a=>+a).reduce((s,a)=>s+a*a,0);
       console.log(n)
       if (n === 1) {
           break;
       }
   }
   return n === 1 ? true : false;
};

//https://leetcode.com/submissions/detail/186567864/
/**
 * @param {number[][]} nums flat 만드는것이 너무 쉬워졌다.
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var flat = [].concat(...nums);
    var rc = flat.length / r;
    var re = Array.apply(null,Array(r)).map(a=>[]);
    
    if (flat.length !== r * c){
        return nums
    } else {
        flat.map((a,i)=>{
            re[Math.floor(i/rc)].push(a);
        });
        return re;
    }
    
};
//https://leetcode.com/problems/next-greater-element-i/
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var re = [];
    for (var i = 0; i < findNums.length ; i++) {
        var k = nums.indexOf(findNums[i]);
        for (var j = k; j < nums.length; j++) {
            if (nums[k] < nums[j] ) {
                re.push(nums[j]);
                break;
            }
        }
        if (j === nums.length) re.push(-1)

    }
    return re;
};
// https://leetcode.com/submissions/detail/186783252/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var re = [];
    
    function Avg(arr) {
        return arr.map(inarr=>inarr.reduce((s,a)=>s+a,0)*(1/inarr.length));
    }
    function roofer(node,depth) {
        if (node !== null) {
            if (!re[depth]) {re.push([])}
            re[depth].push(node.val);
            roofer(node.left, depth+1);
            roofer(node.right, depth+1);
        }
    }
    roofer(root,0);
    
    return Avg(re);
};
//https://leetcode.com/submissions/detail/187147995/
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var regex = '^[a-zA-Z]+$';
    var Parr = [];
    var Re = S.split('').map((a,i)=>{
        if (a.match(regex)) {
            Parr.push(a);
            return '';
        } else {
            return a;
        }
    });
    Re = Re.map(a=>{
        if (a === '') {
            var z = Parr.pop(); 
            return z;
        } else {
            return a;
        }
    });
    
    return Re.join('');
    
};
//https://leetcode.com/problems/nim-game/description/
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return (n % 4 !== 0) 
  };
  //https://leetcode.com/problems/monotonic-array/
  /**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var po = false;
    var mi = false;
    var re = true;
    for (var i =0; i<A.length ; i++) {
        if (po && mi) {
            break;
        }
        if (i > 0 && A[i] > A[i-1]) {
            po = true;
        }
        if (i > 0 && A[i] < A[i-1]) {
            mi = true;
        }
    }
    if (po && mi) {
        re = false;
    }
    return re;
};

//https://leetcode.com/submissions/detail/187834928/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
  };
  
  /**
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.stack.push(x);
  
    var min = this.getMin();
    if (min !== undefined) {
      this.min.push(Math.min(x, min));
    } else {
      this.min.push(x);
    }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    if (this.min.length > 0) {
      return this.min[this.min.length - 1];
    }
  };
//https://leetcode.com/submissions/detail/187836140/..
  /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function remover() {
        var beforelen = s.length;
        s = s.split('()').join('');
        s = s.split('[]').join('');
        s = s.split('{}').join('');
        var afterlen = s.length;
        if (beforelen > afterlen) {
            remover();
        }
    }
    remover();
    
    return s.length === 0
};
// https://leetcode.com/explore/featured/card/queue-stack/232/practical-application-stack/1389/
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var re = 0;
    function Sum(arr, idx, sum) {
        if (idx === arr.length) {
            if (sum === S) {
               re += 1; 
            }
        } else {
            Sum(arr, idx+1, sum+arr[idx]);
            Sum(arr, idx+1, sum-arr[idx]);
        }
    }
    
    Sum(nums,0,0);
    
    return re;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.apply(null,Array(n)).map((a,i)=>{
        var re = ''
        if ((i+1) % 3 === 0 ) {
           re += 'Fizz';
        }
        if ((i+1) % 5 === 0 ) {
           re += 'Buzz';
        }
        return re.length > 0 ? re : (i+1)+''
    });
};
// https://leetcode.com/problems/pascals-triangle/
/**
* @param {number} numRows
* @return {number[][]}
*/
var generate = function(numRows) {
  var re = [];
  for (var i = 0; i < numRows; i++) {
       if (i === 0) {
           re.push([1]);
       } else if (i === 1){
           re.push([1,1]);
       } else {
           var aa = [];
           for (var j = 1; j < re[i-1].length; j++) {
               aa.push(re[i-1][j]+re[i-1][j-1]);
           }
           aa.push(1);
           aa.unshift(1);
           re.push(aa);
       }
  }
  return re;
};
// https://leetcode.com/problems/ransom-note/description/
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) { return false; }
    var ransomNoteArr = ransomNote.split('');
    var oldMagazineLength = magazine.length;
    ransomNoteArr.map(a=>{
        magazine = magazine.replace(a,'');
    });
    return oldMagazineLength == magazine.length +ransomNoteArr.length
};

//https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1662/
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    let obj = {
        0: 0,
        1: 1,
        2: 2,
    };
    //n 번째의 합에 n+1 n+2 의 결과는 이전의 경우의 수의 합이므로     
    for (let i=3; i <=n; i++) {
        
        obj[i] = obj[i-1] + obj[i-2];
    }
    
    return obj[n];
};