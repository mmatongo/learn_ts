function getPermutation(n: number, k: number): string {
  const result: string[] = [];
  const nums: number[] = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  const factorials: number[] = [];
  factorials[0] = 1;
  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * i;
  }
  const helper = (nums: number[], k: number): void => {
    if (nums.length === 1) {
      result.push(nums[0].toString());
      return;
    }
    const factorial = factorials[nums.length - 1];
    const index = Math.floor((k - 1) / factorial);
    result.push(nums[index].toString());
    nums.splice(index, 1);
    k = (k - 1) % factorial + 1;
    helper(nums, k);
  };
  helper(nums, k);
  return result.join('');
};