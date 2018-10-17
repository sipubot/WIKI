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