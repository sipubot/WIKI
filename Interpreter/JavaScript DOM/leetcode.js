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