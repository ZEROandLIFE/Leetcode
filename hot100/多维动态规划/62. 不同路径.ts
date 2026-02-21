function uniquePaths(m: number, n: number): number {
  // 创建 dp 表
  const dp: number[][] = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(1);
  }

  // 填充 dp 表
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
