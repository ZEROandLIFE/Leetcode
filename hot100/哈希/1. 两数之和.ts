function twoSum(nums: number[], target: number): number[] {
    const newmap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++){
        const other = target-nums[i]
        if (newmap.has(other)) {
            return [newmap.get(other)!,i];
        } else {
            newmap.set(nums[i],i)
        }
    }
  return [];
}
const res = twoSum([2, 7, 11, 15], 9)
console.log(res)