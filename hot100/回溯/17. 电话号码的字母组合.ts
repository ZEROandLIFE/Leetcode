function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const digitToLetters: { [key: string]: string } = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const result: string[] = [];
  const current: string[] = [];

  const backtrack = (index: number) => {
    if (index === digits.length) {
      result.push(current.join(""));
      return;
    }

    const digit = digits[index];
    const letters = digitToLetters[digit];

    for (const letter of letters) {
      current.push(letter); // 选择当前字母
      backtrack(index + 1); // 递归处理下一个数字
      current.pop(); // 回溯，撤销选择
    }
  };

  backtrack(0);
  return result;
}
