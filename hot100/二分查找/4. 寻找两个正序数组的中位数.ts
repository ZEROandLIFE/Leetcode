function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 确保 nums1 是较短的数组
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length,
    n = nums2.length;
  const totalLeft = Math.floor((m + n + 1) / 2); // 左半部分的长度

  let left = 0,
    right = m; // 在 nums1 的 [0, m] 范围内二分查找

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2); // nums1 的分割线
    const partition2 = totalLeft - partition1; // nums2 的分割线

    // 处理边界情况
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];

    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    // 检查是否满足分割条件
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // 计算中位数
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeft1, maxLeft2);
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
    } else if (maxLeft1 > minRight2) {
      // 分割线在 nums1 上太靠右，需要左移
      right = partition1 - 1;
    } else {
      // 分割线在 nums1 上太靠左，需要右移
      left = partition1 + 1;
    }
  }

  return 0;
}
