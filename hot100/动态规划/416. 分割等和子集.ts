function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  // 如果总和是奇数，直接返回false
  if (totalSum % 2 !== 0) {
    return false;
  }
  const target = totalSum / 2;
  // 初始化dp数组，dp[i]表示能否组成和为i的子集
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true; // 空集的和为0

  for (const num of nums) {
    // 从后往前更新dp数组，避免重复计算
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
    // 提前终止，如果已经找到target
    if (dp[target]) {
      return true;
    }
  }

  return dp[target];
}
