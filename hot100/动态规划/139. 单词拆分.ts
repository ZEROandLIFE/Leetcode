function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict); // 转换为集合，方便快速查找
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true; // 空字符串

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break; // 只要找到一种拆分方式即可
      }
    }
  }

  return dp[s.length];
}
