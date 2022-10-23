impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;
        let mut set = HashSet::new();
        let mut dup = 0;
        let mut sum = 0;
        for num in nums {
            if set.contains(&num) {
                dup = num;
            } else {
                set.insert(num);
            }
            sum += num;
        }
        let n = nums.len() as i32;
        let missing = n * (n + 1) / 2 - sum + dup;
        vec![dup, missing]
    }
}