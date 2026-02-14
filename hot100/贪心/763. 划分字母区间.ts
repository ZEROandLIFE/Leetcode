function partitionLabels(s: string): number[] {
  const lastOccurrence = new Map<string, number>();
  const n = s.length;

  // 记录每个字符的最后出现位置
  for (let i = 0; i < n; i++) {
    lastOccurrence.set(s[i], i);
  }

  const result: number[] = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < n; i++) {
    end = Math.max(end, lastOccurrence.get(s[i])!);
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
}
