function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp: number[][] = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : 1;
      } else if (i === 0) {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j];
      } else {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};