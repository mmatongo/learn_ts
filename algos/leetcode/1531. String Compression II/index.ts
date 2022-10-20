function getLengthOfOptimalCompression(s: string, k: number): number {
  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => {
    return Array.from({ length: k + 1 }, () => {
      return Array.from({ length: 5 }, () => {
        return Array.from({ length: 27 }, () => Infinity);
      });
    });
  });
  dp[0][0][0][0] = 0;
  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;
    for (let j = 0; j <= k; j++) {
      for (let l = 0; l < 5; l++) {
        for (let m = 0; m < 27; m++) {
          if (dp[i][j][l][m] === Infinity) {
            continue;
          }
          if (m === c) {
            dp[i + 1][j][l < 4 ? l + 1 : 4][c] = Math.min(
              dp[i + 1][j][l < 4 ? l + 1 : 4][c],
              dp[i][j][l][m]
            );
          }
          if (j < k) {
            dp[i + 1][j + 1][0][c] = Math.min(
              dp[i + 1][j + 1][0][c],
              dp[i][j][l][m] + (l === 0 ? 1 : l < 3 ? 2 : 1)
            );
          }
        }
      }
    }
  }
  let ans = Infinity;
  for (let l = 0; l < 5; l++) {
    for (let m = 0; m < 27; m++) {
      ans = Math.min(ans, dp[n][k][l][m]);
    }
  }
  return ans;
}
