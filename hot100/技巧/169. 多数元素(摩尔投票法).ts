function majorityElement(nums: number[]): number {
  let candidate: number | undefined = undefined;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate!; // 题目保证存在多数元素，所以可以断言非空
}


