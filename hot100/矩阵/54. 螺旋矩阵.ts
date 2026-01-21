function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  let ans: number[] = [];
  let short = 0;
  let high = m - 1;
  let left = 0;
  let right = n - 1;
  while (high >= short && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[short][i]);
    }
    short++;
    if (high < short) break;

    for (let i = short; i <= high; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    if (left > right) break;

    for (let i = right; i >= left; i--) {
      ans.push(matrix[high][i]);
    }
    high--;
    if (high < short) break;

    for (let i = high; i >= short; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return ans;
}
