/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let slow:number = 0
    let len:number = nums.length;
    for (let fast = 0; fast < len; fast++){
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
    }
     nums.fill(0, slow);
    
}

