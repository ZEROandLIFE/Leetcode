function maxSlidingWindow(nums: number[], k: number): number[] {
  const ans: number[] = [];
  const que: number[] = []; // 存储索引
  let left = 0; // 队列的逻辑起始位置
  let qlen = 0; // 队列的逻辑长度

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // 1. 移除不在窗口内的队首索引（仅移动 left，不实际删除）
    if (qlen > 0 && que[left] < i - k + 1) {
      left++;
      qlen--;
    }

    // 2. 维护单调递减队列（操作队尾）
    while (qlen > 0 && nums[que[left + qlen - 1]] <= num) {
      qlen--; // 逻辑上移除队尾（不实际 pop）
    }

    // 3. 记录当前索引（逻辑上 push）
    que[left + qlen] = i;
    qlen++;

    // 4. 窗口形成后记录最大值
    if (i >= k - 1) {
      ans.push(nums[que[left]]);
    }
  }

  return ans;
}
