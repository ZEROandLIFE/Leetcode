function partition(s: string): string[][] {
  const result: string[][] = [];
  const path: string[] = [];

  const isPalindrome = (str: string, left: number, right: number): boolean => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  const backtrack = (start: number) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.substring(start, end + 1));
        backtrack(end + 1);
        path.pop();
      }
    }
  };

  backtrack(0);
  return result;
}
