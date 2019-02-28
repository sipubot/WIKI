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
    
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        let sqrt_root = (area as f32).sqrt() as i32;
        let mut l = area;
        let mut w = 1;
        for x in (1..=sqrt_root).rev() {
            if area % x == 0 {
                l = area / x;
                w = x;
                break;
            }
        }
        vec![l, w]
    }
}
