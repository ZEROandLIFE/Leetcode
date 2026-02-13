function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // 如果中间元素大于右边界元素，说明最小值在右半部分
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    // 否则最小值在左半部分或就是 nums[mid]
    else {
      right = mid;
    }
  }

  // 当 left == right 时，找到最小值
  return nums[left];
}
