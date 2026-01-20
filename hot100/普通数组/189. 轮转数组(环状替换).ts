function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  let count = 0; // 记录已经替换的元素个数

  for (let start = 0; count < n; start++) {
    let current = start;
    let prev = nums[start];

    do {
      const next = (current + k) % n;
      [nums[next], prev] = [prev, nums[next]]; // 交换
      current = next;
      count++;
    } while (current !== start); // 直到回到起点
  }
}
