/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxnum = 0
    while (left < right) {
        maxnum = Math.max(maxnum, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
          left++
        } else
            right--
        
    }
    return maxnum
    
};
