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