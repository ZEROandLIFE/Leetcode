/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    let num = nums[i];
    while (left < right) {
      let sum = num + nums[left] + nums[right];
      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        while (nums[left] === nums[left + 1] && left < right) {
          left++;
        }
        while (nums[right] === nums[right - 1] && left < right) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        while (nums[left] === nums[left + 1] && left < right) {
          left++;
        }
        left++;
      } else {
        while (nums[right] === nums[right - 1] && left < right) {
          right--;
        }
        right--;
      }
      }
      while (nums[i] === nums[i + 1]) {
          i++
      }
      if (nums[i] > 0)
          break
  }
  return result;
};
