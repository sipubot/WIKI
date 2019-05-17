impl Solution {
    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut re = vec![];
        let mut vi = intervals;
        if vi.len() == 0 {
            return re;
        }
        vi.sort_by(|a, b| a[1].cmp(&b[1]));
        vi.sort_by(|a, b| a[0].cmp(&b[0]));
        let mut pre = vi[0].to_owned();
        for curr in vi {
            if curr[0] <= pre[1] {
                let p1 = pre[1].to_owned();
                let c1 = curr[1].to_owned();
                pre[1] = cmp::max(p1, c1);
            } else {
                re.push(pre.to_owned());
                pre = curr.to_owned();
            }
        }
        re.push(pre.to_owned());
        re
    }
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let partbox = vec![
            vec![0, 0],
            vec![0, 3],
            vec![0, 6],
            vec![3, 0],
            vec![3, 3],
            vec![3, 6],
            vec![6, 0],
            vec![6, 3],
            vec![6, 6],
        ];
        let mut re = true;

        for i in 0..9 {
            let mut xcc = board[i]
                .clone()
                .into_iter()
                .filter(|x| *x != '.')
                .collect::<Vec<char>>();
            let mut ycc = board
                .clone()
                .into_iter()
                .map(|a| a[i])
                .filter(|x| *x != '.')
                .collect::<Vec<char>>();
            xcc.sort();
            ycc.sort();
            let xst: String = xcc.clone().into_iter().collect();
            let yst: String = ycc.clone().into_iter().collect();
            xcc.dedup();
            ycc.dedup();
            let xdest: String = xcc.into_iter().collect();
            let ydest: String = ycc.into_iter().collect();
            if xst != xdest || yst != ydest {
                re = false;
            }
        }
        let boxa = partbox.into_iter().map(|a| {
            let mut vb = vec![];
            for yi in 0..3 {
                for xi in 0..3 {
                    let o = board[a[0] + yi][a[1] + xi];
                    if o != '.' {
                        vb.push(o);
                    }
                }
            }
            vb.sort();
            let mut c = vb.clone();
            c.dedup();
            if vb.into_iter().collect::<String>() != c.into_iter().collect::<String>() {
                return false;
            } else {
                return true;
            }
        });
        re && !boxa.into_iter().any(|a| a == false)
    }
    pub fn longest_valid_parentheses(s: String) -> i32 {
        let mut stack = Vec::new();
        let mut max = 0;

        stack.push(-1);
        for (i, c) in s.chars().enumerate() {
            if c == '(' {
                stack.push(i as i32);
            } else {
                stack.pop();
                if stack.is_empty() {
                    stack.push(i as i32);
                } else {
                    let l = i as i32 - stack[stack.len() - 1];
                    if l > max {
                        max = l;
                    }
                }
            }
        }
        max
    }
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        use std::collections::HashMap;
        let mut subdomain_counts: HashMap<String, i32> = HashMap::new();

        for cpdomain in cpdomains {
            let mut iter = cpdomain.split_whitespace();
            let count = iter.next().unwrap().parse::<i32>().unwrap();
            let subdomains: Vec<&str> = iter.next().unwrap().split('.').collect();
            let l = subdomains.len();
            for i in 0..l {
                let domain = subdomains[i..l].join(".");
                *subdomain_counts.entry(domain.to_string()).or_insert(0) += count;
            }
        }

        let mut cpdomains = Vec::with_capacity(subdomain_counts.len());
        for (k, v) in subdomain_counts {
            cpdomains.push(v.to_string() + " " + &k);
        }
        cpdomains
    }
    pub fn rotate_string(a: String, b: String) -> bool {
        if a == b {
            return true;
        }
        if a.len() != b.len() {
            return false;
        }
        let mb = b.clone();
        let mut preceding = String::from("");
        let mut s_idx = 0;
        for c in a.chars() {
            if c == b.chars().next().unwrap() {
                let st = &a[s_idx..a.len()].to_string();
                let lt = &a[0..s_idx].to_string();
                if format!("{}{}", st, lt) == mb {
                    return true;
                }
            }
            preceding.push(c);
            s_idx += 1;
        }
        return false;
    }
    pub fn smallest_range_i(a: Vec<i32>, k: i32) -> i32 {
        let mv = a.clone().into_iter().max().unwrap() - a.into_iter().min().unwrap() - (2 * k);
        cmp::max(0, mv)
    }
    pub fn largest_sum_after_k_negations(a: Vec<i32>, k: i32) -> i32 {
        let mut sorta = a.clone();
        let mut kv = k;
        sorta.sort();
        let mut min = i32::max_value();
        let mut i = 0 as usize;
        while kv > 0 {
            sorta[i as usize] = -1 * sorta[i];
            min = cmp::min(min, sorta[i]);
            i += 1;
            if sorta[i] > min {
                i -= 1;
            }
            kv -= 1;
        }

        return sorta.into_iter().sum();
    }
    pub fn remove_outer_parentheses(s: String) -> String {
        let mut re = String::new();
        let mut depth = 0;
        for c in s.chars() {
            if c == ')' {
                depth -= 1;
            }
            if depth != 0 {
                re.push_str(&c.to_string());
            }
            if c == '(' {
                depth += 1;
            }
        }
        re
    }
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let len = cost.len();

        if len < 3 {
            return 0;
        }

        let mut dp:Vec<i32> = vec![];
        
        dp.push(cost[0]);
        dp.push(cost[1]);

        for i in 2..len {
            dp.push(cmp::min(dp[i-1], dp[i-2])+cost[i]);
        }

        return cmp::min(dp[len-2],dp[len-1]);
    }
    pub fn is_one_bit_character(bits: Vec<i32>) -> bool {
        let mut i = 0;
        while i < bits.len() - 1 {
            i += bits[i] as usize + 1;
        }
        i == bits.len() - 1
    }
    pub fn image_smoother(m: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let y = m.len();
        let x = m[0].len();
        let mut cm = m.clone();

        for i in 0..y {
            for j in 0..x {
                let mut count = 0;
                let mut sum = 0;

                let ys = cmp::max(i as i32 - 1, 0);
                let yl = cmp::min(i as i32 + 2, y as i32);
                let xs = cmp::max(j as i32 - 1, 0);
                let xl = cmp::min(j as i32 + 2, x as i32);

                for ni in ys..yl {
                    for nj in xs..xl {
                        sum += cm[ni as usize][nj as usize] & 0xFF;
                        count += 1;
                    }
                }
                match count {
                    0 => {
                        cm[i][j] = 0;
                    }
                    _ => {
                        cm[i][j] |= ((sum as f32 / count as f32).floor() as i32) << 8;
                        //println!("{:?}", (sum as f32 / count as f32));
                    }
                }
            }
        }
        for i in 0..y {
            for j in 0..x {
                cm[i][j] >>= 8;
            }
        }
        return cm;
    }
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        if nums.len() < 2 {
            return vec![];
        }
        let mut positions = HashMap::with_capacity(nums.len());
        for (i, num) in nums.iter().enumerate() {
            let search = target - num;
            if let Some(second_pos) = positions.get(&search) {
                return vec![*second_pos as i32, i as i32];
            }
            positions.insert(*num, i);
        }
        vec![]
    }
    pub fn find_lu_slength(a: String, b: String) -> i32 {
        if a == b {
            -1
        } else {
            std::cmp::max(a.len(), b.len()) as i32
        }
    }
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        let mut re = letters[0];
        for i in 0..letters.len() {
            if letters[i] <= target {
                re = letters[(i + 1) % letters.len()];
            }
        }
        re
    }
    pub fn longest_word(words: Vec<String>) -> String {
        let mut re = "".to_string();
        let mut cwords = words;
        let mut set = std::collections::HashSet::new();
        cwords.sort();
        for w in cwords {
            if w.len() == 1 || set.get(&w[0..w.len() - 1]).is_some() {
                if w.len() > re.len() {
                    re = format!("{}", w.to_string());
                }
                set.insert(w);
            }
        }
        re
    }
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        match nums.iter().position(|&x| x==target) {
            None => {
                return -1;
            },
            Some(n) => {
                return n as i32;
            }
        };
    }
    pub fn count_binary_substrings(s: String) -> i32 {
        let s = s.as_bytes();
        let (mut prev, mut curr) = (0, 1);
        let mut res = 0;
        
        // XXX: start from the 2nd char
        for i in 1..s.len() {
            if s[i] == s[i-1] {
                // dup
                curr += 1;                
            } else {
                // flip point
                prev = curr;
                curr = 1;
            }
            // XXX: always check prev, flip or not
            if prev > 0 {
                prev -= 1;
                res += 1;
            }
        }
        
        res
    }
    pub fn has_alternating_bits(n: i32) -> bool {
        let bin = format!("{:b}", n).to_string();
        for i in 1..bin.len() {
            if bin.chars().nth(i).unwrap() == bin.chars().nth(i - 1).unwrap() {
                return false;
            }
        }
        true
    }
    pub fn cal_points(ops: Vec<String>) -> i32 {
        let mut point = 0;
        let mut stack = <Vec<i32>>::new();
        for op in ops {
            match op.as_ref() {
                "+" => {
                    let a = stack[stack.len() - 2];
                    let b = stack[stack.len() - 1];
                    stack.push(a + b);
                    point += a + b;
                }
                "D" => {
                    let b = stack[stack.len() - 1];
                    let c = b * 2;
                    stack.push(c);
                    point += c;
                }
                "C" => {
                    let c = stack.pop().unwrap();
                    point -= c;
                }
                _ => {
                    let x = op.parse::<i32>().unwrap();
                    stack.push(x);
                    point += x;
                }
            }
        }
        point
    }
    pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 {
        if nums.len() == 0 as usize {
            return 0;
        }
        let mut max = 1;
        let mut c = 1;
        for n in 1..nums.len() {
            if nums[n - 1] < nums[n] {
                c += 1;
            } else {
                if c > max {
                    max = c;
                }
                c = 1;
            }
        }
        if max < c {
            max = c;
        }
        max
    }    
    pub fn find_error_nums(mut ns: Vec<i32>) -> Vec<i32> {
        let mut nums = ns.to_vec();
        let mut re_none = 1;
        let mut re_dup = -1;
        for n in nums {
            let cur = ns[n.abs() as usize - 1];
            if cur < 0 {
                re_dup = n.abs();
            } else {
                ns[n.abs() as usize - 1] *= -1;
            }
        }
        for (i, &n) in ns.iter().enumerate() {
            if n > 0 {
                re_none = (i + 1) as i32;
            }
        }
        vec![re_dup, re_none]
    }
    pub fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
        let avr: Vec<f64> = nums.into_iter().map(|x| x as f64 / k as f64).collect();
        let mut max = avr.clone()[0..k as usize]
            .into_iter()
            .fold(0., |a, &b| a + b);
        let mut sum = max;
        for i in k as usize..avr.len() {
            sum = sum - avr[i - k as usize] + avr[i];
            if sum > max {
                max = sum;
            }
        }
        max
    }
    pub fn judge_square_sum(c: i32) -> bool {
        let mut start = 0;
        let mut end = (c as f64).sqrt() as i32;
        let mut t = 0;
        while start <= end {
            t = start * start + end * end;
            if t == c {
                return true;
            }
            if t > c {
                end += -1;
            } else {
                start += 1;
            }
        }
        false
    }
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

struct MyHashSet {
    hash_vec: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyHashSet {
    /** Initialize your data structure here. */
    fn new() -> Self {
        let mut h = Vec::with_capacity(100001 as usize);
        for n in 0..100001 {
            h.push(-1);
        }
        MyHashSet { hash_vec: h }
    }

    fn add(&mut self, key: i32) {
        if *&self.hash_vec[key as usize] == -1 {
            self.hash_vec[key as usize] = 1;
        }
    }

    fn remove(&mut self, key: i32) {
        if *&self.hash_vec[key as usize] == 1 {
            self.hash_vec[key as usize] = -1;
        }
    }

    /** Returns true if this set contains the specified element */
    fn contains(&self, key: i32) -> bool {
        if *&self.hash_vec[key as usize] == 1 {
            return true;
        } else {
            return false;
        }
    }
}

