function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 上下左右

  const backtrack = (i: number, j: number, index: number): boolean => {
    if (index === word.length) {
      return true;
    }
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }

    const temp = board[i][j]; // 保存当前字符
    board[i][j] = "#"; // 标记为已访问

    for (const [dx, dy] of directions) {
      const x = i + dx;
      const y = j + dy;
      if (backtrack(x, y, index + 1)) {
        return true;
      }
    }

    board[i][j] = temp; // 恢复当前字符
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
