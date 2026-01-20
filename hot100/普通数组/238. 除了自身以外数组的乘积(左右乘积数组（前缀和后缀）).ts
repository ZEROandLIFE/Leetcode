function productExceptSelf(nums: number[]): number[] {
  let len = nums.length;
  let left: number[] = Array(len).fill(1);
  let right: number[] = Array(len).fill(1);
  let ans: number[] = Array(len);
    for (let i = 1; i < len; i++) {
      left[i]=left[i-1]*nums[i-1]
  }
    for (let i = len - 2; i >= 0; i--) {
      right[i]=right[i+1]*nums[i+1]
    }
    for (let i = 0; i < len; i++) {
        ans[i]=left[i]*right[i]
        
    }
  return ans;
}
