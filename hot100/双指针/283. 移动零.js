/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
    let slow = 0
    let len = nums.length
    for (let fast = 0; fast < len; fast++){
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    nums.fill(0,slow)
};
