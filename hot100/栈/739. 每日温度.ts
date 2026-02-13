function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0); // 初始化全 0
  const stack: number[] = []; // 存储索引的单调栈

  for (let i = 0; i < n; i++) {
    // 当前温度 > 栈顶温度时，更新 answer
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i); // 压入当前索引
  }

  return answer;
}
