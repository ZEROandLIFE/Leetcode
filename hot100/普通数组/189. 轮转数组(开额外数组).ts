/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; 
  const rotated = nums.slice(-k).concat(nums.slice(0, n - k));
  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}