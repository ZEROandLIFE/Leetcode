function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 初始化邻接表和入度数组
  const adjList: number[][] = new Array(numCourses).fill(0).map(() => []);
  const inDegree: number[] = new Array(numCourses).fill(0);

  // 构建邻接表和入度数组
  for (const [a, b] of prerequisites) {
    adjList[b].push(a); // b -> a
    inDegree[a]++;
  }

  // 初始化队列，将所有入度为0的节点加入队列
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0; // 记录已访问的节点数

  while (queue.length > 0) {
    const u = queue.shift()!;
    count++;

    for (const v of adjList[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return count === numCourses;
}
