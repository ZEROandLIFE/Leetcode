function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  // 反转整个数组
  reverse(nums, 0, n - 1);
  // 反转前 k 个元素
  reverse(nums, 0, k - 1);
  // 反转剩余元素
  reverse(nums, k, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
