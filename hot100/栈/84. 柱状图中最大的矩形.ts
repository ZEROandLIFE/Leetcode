function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  if (n === 0) return 0;

  const left = new Array(n).fill(-1); // 左边第一个比当前柱子小的索引
  const right = new Array(n).fill(n); // 右边第一个比当前柱子小的索引
  const stack: number[] = []; // 单调递增栈（存储索引）

  // 计算 left 数组
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  // 清空栈，复用
  stack.length = 0;

  // 计算 right 数组
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  // 计算最大面积
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const width = right[i] - left[i] - 1;
    const area = heights[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
