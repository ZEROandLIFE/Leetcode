function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 1. 转置矩阵（matrix[i][j] 和 matrix[j][i] 交换）
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. 翻转每一行（反转数组）
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
