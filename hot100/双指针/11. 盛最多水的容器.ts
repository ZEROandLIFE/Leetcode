function maxArea(height: number[]): number {
    let left:number = 0 
    let right: number = height.length - 1;
    let maxarea: number = 0;
    while (left < right) {
        maxarea = Math.max(Math.min(height[left], height[right]) * (right - left), maxarea)
        if (height[left] < height[right]) {
            left++
        } else
            right--
    }
    return maxarea;
}
