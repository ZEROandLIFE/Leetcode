function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(
  nums: number[],
  l: number,
  r: number,
  target: number
): number {
  if (l === r) return nums[l];

  // 三数取中，进一步避免最坏情况
  const mid = (l + r) >> 1;
  const pivot = medianOfThree(nums, l, mid, r);

  let i = l,
    j = r;
  while (i <= j) {
    while (nums[i] < pivot) i++;
    while (nums[j] > pivot) j--;
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  if (target <= j) return quickSelect(nums, l, j, target);
  if (target >= i) return quickSelect(nums, i, r, target);
  return nums[target];
}

function medianOfThree(
  nums: number[],
  a: number,
  b: number,
  c: number
): number {
  // 返回中位数，并将它放到 nums[r] 位置作为 pivot
  if (nums[a] > nums[b]) [a, b] = [b, a];
  if (nums[a] > nums[c]) [a, c] = [c, a];
  if (nums[b] > nums[c]) [b, c] = [c, b];
  [nums[b], nums[c]] = [nums[c], nums[b]]; // 中位数放末尾
  return nums[c];
}
