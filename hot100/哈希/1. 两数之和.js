/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const newmap = new Map()
    for (let i = 0; i < nums.length; i++){
        const other = target - nums[i]
        if (newmap.has(other)) {
            return [i, newmap.get(other)]
            
        } else {
            newmap.set(nums[i],i)
        }
    }
    return []
};
