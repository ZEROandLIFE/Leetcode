function longestConsecutive(nums: number[]): number {
  const newset = new Set(nums);
  let maxnum: number = 0;
  for (const num of newset) {
    if (newset.has(num - 1)) {
      continue;
    } else {
      let count = 0;
      let now = num;
      while (newset.has(now)) {
        count++;
        now++;
      }
      maxnum = Math.max(maxnum, count);
    }
  }
  return maxnum;
}
