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
        struct Map {
            key : usize,
            value : i32
        }
        let mut re: Vec<String> = Vec::with_capacity(nums.len() as usize);
        let mut mapvec: Vec<Map> = Vec::with_capacity(nums.len() as usize);
        for (i, a) in nums.iter().enumerate() {
            re.push("".to_string());
            mapvec.push(Map{key :i , value :*a});
        }
        //sort
        mapvec.sort_by(|a,b| b.value.cmp(&a.value));
        for (rank, m) in mapvec.iter().enumerate() {
            match rank as i32 {
               0 => { re[m.key] = "Gold Medal".to_string(); },
               1 => { re[m.key] = "Silver Medal".to_string(); },
               2 => { re[m.key] = "Bronze Medal".to_string(); },
               _ => { re[m.key] = (rank as u32 + 1).to_string(); },
            }
        }
        re
    }
    pub fn check_perfect_number(num: i32) -> bool {
        if num <= 0 {return false;}
        let l = (num as f64).sqrt() as i32;
        let mut re: Vec<i32> = vec![];
        for v in 1..l+1 {
            if num % v == 0 {
                re.push((num / v) as i32);
                re.push(v as i32);
            }
        }
        re.sort_unstable();
        re.dedup();
        let sum: i32 = re.iter().sum();
        return sum == num * 2;
    }


}
