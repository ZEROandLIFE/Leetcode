function coinChange(coins: number[], amount: number): number {
  // 初始化 dp 数组，dp[i] 表示凑成金额 i 所需的最少硬币数
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 金额为 0 时不需要硬币

  // 遍历所有金额从 1 到 amount
  for (let i = 1; i <= amount; i++) {
    // 尝试用每一个硬币去凑金额 i
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // 如果 dp[amount] 仍然是 Infinity，说明无法凑成
  return dp[amount] === Infinity ? -1 : dp[amount];
}
