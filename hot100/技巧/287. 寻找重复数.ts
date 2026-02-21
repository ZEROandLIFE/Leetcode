function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  // 第一阶段：找到相遇点
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // 第二阶段：找到环的入口（重复的数字）
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
