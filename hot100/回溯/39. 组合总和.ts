function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  // 排序是为了提前终止不必要的递归
  candidates.sort((a, b) => a - b);

  const backtrack = (start: number, remainingTarget: number) => {
    if (remainingTarget === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (remainingTarget - num < 0) {
        break; // 提前终止，因为数组已排序，后面的数字会更大
      }
      current.push(num); // 选择当前数字
      backtrack(i, remainingTarget - num); // 递归调用，注意可以重复选择当前数字（i 而不是 i + 1）
      current.pop(); // 回溯，撤销选择
    }
  };

  backtrack(0, target);
  return result;
}
