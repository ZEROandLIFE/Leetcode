function numIslands(grid: string[][]): number {
      if (!grid || grid.length === 0) return 0;

      let count = 0;
      const rows = grid.length;
    const cols = grid[0].length;
    function dfs(r: number, c: number) { // 检查边界和是否为陆地
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        // 标记为已访问（水）
        grid[r][c] = '0';

        // 递归访问四个方向
        dfs(r + 1, c); // 下
        dfs(r - 1, c); // 上
        dfs(r, c + 1); // 右
        dfs(r, c - 1); // 左
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          count++;
          dfs(r, c); // 标记所有相连的陆地
        }
      }
    }

    return count;
}
