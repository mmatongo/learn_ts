impl Solution {
    pub fn increasing_triplet(nums: Vec<i32>) -> bool {
        let mut min = std::i32::MAX;
        let mut mid = std::i32::MAX;
        for num in nums {
            if num <= min {
                min = num;
            } else if num <= mid {
                mid = num;
            } else {
                return true;
            }
        }
        false    
    }
}
