function maxSubArray(nums: number[]): number {
  let maxcur = nums[0];
  let maxall = nums[0];
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    if (maxcur < 0) {
      maxcur = nums[i];
    } else {
      maxcur += nums[i];
    }
    maxall = Math.max(maxcur, maxall);
  }
  return maxall;
}
