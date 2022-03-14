function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);
  for (let i = 1; i < nums.length + 2; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return 1;
};