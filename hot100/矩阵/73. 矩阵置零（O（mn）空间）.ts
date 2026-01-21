/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let arr: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        arr[i][j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === true) {
          for (let k = 0; k < m; k++){
              matrix[k][j] = 0;
          }
          for (let k = 0; k < n; k++) {
            matrix[i][k] = 0;
          }
      }
    }
  }
}
