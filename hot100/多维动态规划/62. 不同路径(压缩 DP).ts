function uniquePaths(m: number, n: number): number {
  const dp = new Array(n).fill(1); // 初始化为第一行的值
  for (let i = 1; i < m; i++) {
    // 从第二行开始计算
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]; // 当前行的 dp[j] = 上一行的 dp[j] + 当前行的 dp[j-1]
    }
  }
  return dp[n - 1]; // 返回右下角的结果
}
