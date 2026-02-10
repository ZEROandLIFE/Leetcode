function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[] = Array(n).fill(".".repeat(n)); // 初始化棋盘，每行全是 '.'

  const cols = new Set<number>(); // 记录已占用的列
  const diag1 = new Set<number>(); // 记录主对角线（行 - 列）
  const diag2 = new Set<number>(); // 记录副对角线（行 + 列）

  const backtrack = (row: number) => {
    if (row === n) {
      result.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col; // 主对角线
      const d2 = row + col; // 副对角线

      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
        continue; // 冲突，跳过
      }

      // 放置皇后
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);
      board[row] =
        board[row].substring(0, col) + "Q" + board[row].substring(col + 1);

      // 递归下一行
      backtrack(row + 1);

      // 回溯，撤销选择
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
      board[row] = ".".repeat(n);
    }
  };

  backtrack(0);
  return result;
}
