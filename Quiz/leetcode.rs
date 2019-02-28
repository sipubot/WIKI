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
    
    pub fn find_relative_ranks(nums: Vec<i32>) -> Vec<String> {
        let mut nv = nums.to_vec();
        let mut re: Vec<String> = Vec::with_capacity(nv.len() as usize);
        for _a in 0..nv.len() {
            re.push("".to_string());
        }
        nv.sort_by_key(|&n| Reverse(n));
        for (rank, point) in nv.iter().enumerate() {
            let idx = nums.iter().position(|&o| o == *point);
            match idx  {
                Some(x) => {
                    match rank {
                        0 =>{ re[x] = "Gold Medal".to_string(); },
                        1 =>{ re[x] = "Silver Medal".to_string(); },
                        2 =>{ re[x] = "Bronze Medal".to_string(); },
                        _ =>{ re[x] = (rank as u32 + 1).to_string(); }
                    }
                },
                None =>{}
            }
        }
        //println!("{:?}",re);
        re
    }
}
