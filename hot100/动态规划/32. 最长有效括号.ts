function longestValidParentheses(s: string): number {
  const n = s.length;
  if (n < 2) return 0;

  const dp = new Array(n).fill(0);
  let maxLen = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else {
        const prevLen = dp[i - 1];
        const prevIndex = i - prevLen - 1;
        if (prevIndex >= 0 && s[prevIndex] === "(") {
          dp[i] = dp[i - 1] + 2 + (prevIndex > 0 ? dp[prevIndex - 1] : 0);
        }
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
  }

  return maxLen;
}
