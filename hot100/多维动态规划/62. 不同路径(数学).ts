function uniquePaths(m: number, n: number): number {
  // 计算组合数 C(m + n - 2, m - 1)
  const total = m + n - 2;
  const k = Math.min(m - 1, n - 1);
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (total - k + i)) / i;
  }
  return res;
}
