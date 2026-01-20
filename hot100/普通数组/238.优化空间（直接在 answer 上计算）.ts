function productExceptSelf(nums: number[]): number[] {
  let len = nums.length;
  let left = 1;
  let right = 1;
  let ans: number[] = Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    ans[i] *= left;
    left *= nums[i];
    const j = len - i - 1;
    ans[j] *= right;
    right *= nums[j];
  }
  return ans;
}
