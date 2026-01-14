function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  let cur = 0;
  const len = nums.length;
  while (cur < len - 2) {
    let now = nums[cur];
    let left = cur + 1;
    let right = len - 1;
    while (left < right) {
      let sum = nums[left] + nums[right] + now;

      if (sum === 0) {
        result.push([now, nums[left], nums[right]]);
        while (nums[left] === nums[left + 1] && left < right) {
          left++;
        }
        while (nums[right] === nums[right - 1] && left < right) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
    while (nums[cur] === nums[cur + 1]) {
      cur++;
    }
    cur++;
  }
  return result;
}
