function maxSubArray(nums: number[]): number {
  return divideAndConquer(nums, 0, nums.length - 1);
}

function divideAndConquer(nums: number[], left: number, right: number): number {
  if (left === right) {
    return nums[left]; // 基本情况：单个元素
  }

  const mid = Math.floor((left + right) / 2);

  // 递归求解左右两部分的最大子数组和
  const leftMax = divideAndConquer(nums, left, mid);
  const rightMax = divideAndConquer(nums, mid + 1, right);

  // 计算跨越中点的最大子数组和
  const crossMax = maxCrossingSum(nums, left, mid, right);

  // 返回三者中的最大值
  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(
  nums: number[],
  left: number,
  mid: number,
  right: number
): number {
  // 计算左半部分的最大和（从中点向左扩展）
  let leftSum = -Infinity;
  let sum = 0;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  // 计算右半部分的最大和（从中点向右扩展）
  let rightSum = -Infinity;
  sum = 0;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  // 跨越中点的最大和 = 左半部分最大和 + 右半部分最大和
  return leftSum + rightSum;
}

// 示例测试
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 输出: 6
console.log(maxSubArray([1])); // 输出: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 输出: 23
