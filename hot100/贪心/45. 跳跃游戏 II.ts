function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;
  const lastIndex = nums.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      if (currentEnd >= lastIndex) {
        break;
      }
    }
  }

  return jumps;
}
