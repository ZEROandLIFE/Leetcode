/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const newset = new Set(nums)
    let maxnum = 0
    
    for (const num of newset) {
        if (newset.has(num-1)) {
            continue
        } else {
            let now = num
            let count=0
            while (newset.has(now)) {
                now++
                count++
            }
            maxnum = Math.max(maxnum,count);
        }
    }
    return maxnum;
};
