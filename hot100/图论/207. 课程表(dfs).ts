function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 构建邻接表表示的图
  const graph = Array.from({ length: numCourses }, () => []);
  prerequisites.forEach(([v, u]) => graph[u].push(v));

  // 颜色数组：0=未访问，1=访问中，2=已访问
  const colors = Array.from({ length: numCourses }, () => 0);

  // DFS 函数，检测从当前节点出发是否存在环
  const dfs = (position: number) => {
    colors[position] = 1; // 标记为访问中
    for (const child of graph[position]) {
      if (colors[child] === 1 || (colors[child] === 0 && dfs(child))) {
        return true; // 发现环
      }
    }
    colors[position] = 2; // 标记为已访问
    return false; // 未发现环
  };

  // 对每个节点进行 DFS
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) {
      return false; // 发现环，无法完成课程
    }
  }
  return true; // 无环，可以完成课程
}
