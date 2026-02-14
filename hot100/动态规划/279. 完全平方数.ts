function numSquares(n: number): number {
  // 创建动态规划数组，初始值为Infinity
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // 基本情况：0需要0个平方数

  for (let i = 1; i <= n; i++) {
    // 遍历所有可能的平方数j*j <= i
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
     
        
    }
  }

  return dp[n];
}
