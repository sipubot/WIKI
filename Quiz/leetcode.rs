impl Solution {
    pub fn maximum_product(nums: Vec<i32>) -> i32 {
        let mut min1 = 2147483647;
        let mut min2 = 2147483647;
        let mut max1 = -2147483648;
        let mut max2 = -2147483648;
        let mut max3 = -2147483648;

        for n in nums.iter() {
            if n <= &min1 {
                min2 = min1;
                min1 = *n;
            } else if n <= &min2 {
                min2 = *n;
            }
            if n >= &max1 {
                max3 = max2;
                max2 = max1;
                max1 = *n;
            } else if n >= &max2 {
                max3 = max2;
                max2 = *n;
            } else if n >= &max3 {
                max3 = *n;
            }
        }
        cmp::max(min1 * min2 * max1, max1 * max2 * max3)
    }
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        let mut count = 0;
        let mut fb = flowerbed.clone();
        for i in 0..flowerbed.len() {
            if (i == 0 || fb[i - 1] == 0) && fb[i] == 0 && (i == fb.len() - 1 || fb[i + 1] == 0) {
                fb[i] = 1;
                count += 1;
            }
            if count >= n {
                return true;
            }
        }
        false
    }    
    pub fn find_restaurant(list1: Vec<String>, list2: Vec<String>) -> Vec<String> {
        let mut hash = HashMap::new();
        let mut re = <Vec<String>>::new();
        let mut mini = list1.len() + list2.len();
        for (i, s) in list1.iter().enumerate() {
            hash.insert(s, i);
        }
        for (i, s) in list2.iter().enumerate() {
            match hash.get(&s.to_string()) {
                Some(v) => {
                    if i + v < mini {
                        mini = i + v;
                        re = vec![s.to_string()];
                    } else if v + i == mini {
                        re.push(s.to_string());
                    }
                }
                None => {}
            }
        }
        re
    }

    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        let mut h = HashMap::new();
        for n in nums.iter() {
            match h.get(n) {
                Some(num) => h.insert(n, num+1),
                None => h.insert(n, 1),
            };
        }
        //println!("{:?}",h);
        let mut re = 0;
        for (k, v) in &h {
            match &h.get(&(*k+1)) {
                Some(n) =>{
                    let sum = *v + **n;
                    re = cmp::max(re, sum);
                },
                None =>{},
            }
        }
        re
    }

    pub fn check_record(s: String) -> bool {
        s.find("A") == s.rfind("A") && s.find("LLL") == None
    }
    pub fn detect_capital_use(word: String) -> bool {
        if word.len() <= 1 { return true;}
        let a = word.to_ascii_uppercase() == word;
        let b = word.to_lowercase() == word;
        let c = word.clone()[0..1].to_ascii_uppercase() + &word.clone()[1..word.len()].to_lowercase() == word;
        a || b || c
    }

    pub fn fib(n: i32) -> i32 {
        let mut fi: Vec<i32> = vec![0,1];
        for i in 2..(n+1) as usize {
            fi.push(fi[i-2]+fi[i-1]);
        }
        fi[n as usize]
    }

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
