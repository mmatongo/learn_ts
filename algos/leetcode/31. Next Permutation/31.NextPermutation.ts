/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);

  function swap(nums: number[], i: number, j: number): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function reverse(nums: number[], start: number): void {
    let i = start,
      j = nums.length - 1;
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }

  return;
};