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