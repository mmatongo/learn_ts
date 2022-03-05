function deleteAndEarn(nums: number[]): number {
  const n = 10 ** 4 + 1;
  const cnt = new Array(n).fill(0);
  for (const num of nums) {
    cnt[num]++;
  }
  const dp = new Array(n).fill(0);
  dp[1] = cnt[1];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + cnt[i] * i);
  }
  return dp[n - 1];
};