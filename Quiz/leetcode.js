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