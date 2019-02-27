impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut t: i32 = 0 as i32;
        let mut re: i32 = 0 as i32;
        for num in nums {
            if num == 1 as i32 {
                t = t + 1;
                if &t > &re {
                    re = &t;
                }
            } else {
                t = 0 as i32;
            }
        }
        re
    }
}
