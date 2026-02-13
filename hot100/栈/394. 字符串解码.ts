function decodeString(s: string): string {
  const stack: [string, number][] = [];
  let currentStr = "";
  let currentNum = 0;

  for (const char of s) {
    if (char === "[") {
      stack.push([currentStr, currentNum]);
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      const [prevStr, num] = stack.pop()!;
      currentStr = prevStr + currentStr.repeat(num);
    } else if (/\d/.test(char)) {
      currentNum = currentNum * 10 + parseInt(char, 10);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}
