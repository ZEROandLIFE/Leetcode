function minWindow(s: string, t: string): string {
  const charmap = new Map<string, number>();
  let minlen = Infinity;
  let tlen = t.length;
  let slen = s.length;
  let res = "";
  let require = 0;

  // 初始化 charmap，统计 t 的字符频率
  for (let i = 0; i < tlen; i++) {
    const char = t.charAt(i);
    charmap.set(char, (charmap.get(char) || 0) + 1);
  }
  require = charmap.size; // 需要匹配的唯一字符数

  let left = 0;
  for (let right = 0; right < slen; right++) {
    const char = s.charAt(right);
    if (charmap.has(char)) {
      charmap.set(char, charmap.get(char)! - 1);
      if (charmap.get(char) === 0) {
        require--;
      }
    }

    // 当窗口满足条件时，尝试收缩左边界
    while (require === 0) {
      const currentLen = right - left + 1;
      if (currentLen < minlen) {
        minlen = currentLen;
        res = s.substring(left, right + 1);
      }

      const leftChar = s.charAt(left);
      if (charmap.has(leftChar)) {
        charmap.set(leftChar, charmap.get(leftChar)! + 1);
        if (charmap.get(leftChar)! > 0) {
          require++;
        }
      }
      left++;
    }
  }

  return res;
}
