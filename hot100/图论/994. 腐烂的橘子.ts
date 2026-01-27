function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: [number, number][] = [];
  let freshCount = 0;
  let minutes = 0;

  // 初始化：统计新鲜橘子数量，并将腐烂橘子加入队列
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        freshCount++;
      } else if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  // 如果没有新鲜橘子，直接返回 0
  if (freshCount === 0) return 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]; // 四个方向

  // BFS 处理腐烂过程
  while (queue.length > 0 && freshCount > 0) {
    const levelSize = queue.length; // 当前层的腐烂橘子数量

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // 检查边界和是否为新鲜橘子
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rows &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2; // 标记为腐烂
          freshCount--;
          queue.push([nr, nc]);
        }
      }
    }

    if (queue.length > 0) minutes++; // 只有下一层还有橘子时才增加时间
  }

  // 检查是否还有新鲜橘子
  return freshCount === 0 ? minutes : -1;
}
