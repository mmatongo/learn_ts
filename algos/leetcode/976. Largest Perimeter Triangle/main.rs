impl Solution {
    pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
        // use a heap to sort the array
        let mut heap = std::collections::BinaryHeap::new();
        for num in nums {
            heap.push(num);
        }
        // pop the largest 3 numbers
        let mut a = heap.pop().unwrap();
        let mut b = heap.pop().unwrap();
        let mut c = heap.pop().unwrap();
        // check if they can form a triangle
        while a >= b + c {
            if heap.is_empty() {
                return 0;
            }
            a = b;
            b = c;
            c = heap.pop().unwrap();
        }
        a + b + c
    }
}