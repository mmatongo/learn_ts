function removeDuplicates(nums: number[]): number {
  if (!nums || nums.length < 2) return nums.length;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};