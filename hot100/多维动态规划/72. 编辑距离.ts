function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  // 创建 (m+1) x (n+1) 的 DP 表
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  // 初始化第一行和第一列
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // 填充 DP 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(
            dp[i - 1][j], // 删除
            dp[i][j - 1], // 插入
            dp[i - 1][j - 1] // 替换
          ) + 1;
      }
    }
  }

  return dp[m][n];
}
