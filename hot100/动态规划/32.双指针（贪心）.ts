function longestValidParentheses(s: string): number {
  let left = 0,
    right = 0,
    maxLen = 0;

  // 正向遍历
  for (const char of s) {
    if (char === "(") left++;
    else right++;
    if (left === right) maxLen = Math.max(maxLen, left + right);
    else if (right > left) left = right = 0;
  }

  left = right = 0;

  // 反向遍历
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") left++;
    else right++;
    if (left === right) maxLen = Math.max(maxLen, left + right);
    else if (left > right) left = right = 0;
  }

  return maxLen;
}
