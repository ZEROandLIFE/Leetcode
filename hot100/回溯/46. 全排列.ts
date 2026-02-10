function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  const backtrack = () => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // 跳过已使用的数字
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop(); // 撤销选择
      used[i] = false; // 撤销标记
    }
  };

  backtrack();
  return result;
}
