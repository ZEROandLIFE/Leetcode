function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];

  const backtrack = (start: number) => {
    result.push([...subset]); // 添加当前子集的副本

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]); // 包含当前数字
      backtrack(i + 1); // 递归处理下一个数字
      subset.pop(); // 回溯，不包含当前数字
    }
  };

  backtrack(0);
  return result;
}
