function trap(height: number[]): number {
  let result: number = 0;
  let left: number = 0;
  let right: number = height.length;
  let leftmax = height[left];
  let rightmax = height[right];
  while (left < right) {
    if (leftmax < rightmax) {
      left++;
      if (leftmax > height[left]) {
        result += leftmax - height[left];
      } else {
        leftmax = height[left];
      }
    } else {
        right--
        if (rightmax > height[right]) {
          result += rightmax - height[right];
        } else {
          rightmax = height[right];
        }
    }
  }
  return result;
}
