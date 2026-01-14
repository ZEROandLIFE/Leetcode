/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let result=0
    let left = 0
    let leftmax = height[left]
    let right = height.length - 1
    let rightmax = height[right];
    while (left < right) {
        if (leftmax < rightmax) {
            left++
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
    return result
};
