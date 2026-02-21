function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  // 从后向前找到第一个 nums[i] < nums[i+1]
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    // 从后向前找到第一个 nums[j] > nums[i]
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    // 交换 nums[i] 和 nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 反转 nums[i+1..n-1]
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
