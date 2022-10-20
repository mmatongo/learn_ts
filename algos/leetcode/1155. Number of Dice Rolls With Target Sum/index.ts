function numRollsToTarget(n: number, k: number, target: number): number {
    const mod = 1000000007;
    const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
        for (let l = 1; l <= k; l++) {
            if (j - l >= 0) {
            dp[i][j] = (dp[i][j] + dp[i - 1][j - l]) % mod;
            }
        }
        }
    }
    return dp[n][target];
};
