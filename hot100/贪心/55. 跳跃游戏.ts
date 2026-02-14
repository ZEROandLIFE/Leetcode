function canJump(nums: number[]): boolean {
  let maxReach = 0;
  const lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= lastIndex) {
      return true;
    }
  }

  return maxReach >= lastIndex;
}
