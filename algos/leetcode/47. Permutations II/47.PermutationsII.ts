function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const results: number[][] = [];
  dfs(nums, new Array(nums.length).fill(0), [] as number[], results);
  return results;
};

function dfs(nums: number[], used: boolean[], sequence: number[], result: number[][]) {
  if (sequence.length === nums.length) {
    result.push(sequence.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
    used[i] = true;
    sequence.push(nums[i]);
    dfs(nums, used, sequence, result);
    sequence.pop();
    used[i] = false;
  }
}