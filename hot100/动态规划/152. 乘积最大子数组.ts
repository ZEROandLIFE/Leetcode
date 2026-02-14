function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;

  // 初始化：全局最大值、当前最大值、当前最小值
  let maxProduct: number = nums[0];
  let currentMax: number = nums[0];
  let currentMin: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // 如果当前数字是负数，交换 currentMax 和 currentMin
    // 因为负数会让大的数变小，小的数变大
    if (num < 0) {
      [currentMax, currentMin] = [currentMin, currentMax];
    }

    // 更新 currentMax 和 currentMin
    currentMax = Math.max(num, currentMax * num);
    currentMin = Math.min(num, currentMin * num);

    // 更新全局最大值
    maxProduct = Math.max(maxProduct, currentMax);
  }

  return maxProduct;
}
