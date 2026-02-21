function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇数长度回文（中心为一个字符）
    expandAroundCenter(i, i + 1); // 偶数长度回文（中心为两个字符）
  }

  function expandAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  return s.substring(start, start + maxLen);
}
