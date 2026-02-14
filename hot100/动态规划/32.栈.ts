function longestValidParentheses(s: string): number {
  const stack = [-1]; // 初始边界
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop(); // 尝试匹配
      if (stack.length === 0) {
        stack.push(i); // 无法匹配，更新边界
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
}
