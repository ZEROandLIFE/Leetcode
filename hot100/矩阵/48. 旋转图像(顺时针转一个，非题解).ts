function rotate(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let short = 0;
  let high = m - 1;
  let left = 0;
  let right = n - 1;
  let last = 0;
  let temp = 0;
  while (high >= short && left <= right) {
    last = [short + 1][left];
    for (let i = left; i <= right; i++) {
      temp = matrix[i][right];
      matrix[i][right] = last;
      last = temp;
    }

    for (let i = short; i <= high; i++) {
      temp = matrix[short][i];
      matrix[short][i] = last;
      last = temp;
    }

    for (let i = right; i >= left; i--) {
      temp = matrix[high][i];
      matrix[high][i] = last;
      last = temp;
    }

    for (let i = high; i >= short; i--) {
      temp = matrix[i][left];
      matrix[i][left] = last;
      last = temp;
    }
    short++;
    right--;
    high--;
    left++;
  }
}
