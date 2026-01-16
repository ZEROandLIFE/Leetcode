function subarraySum(nums: number[], k: number): number {
    let ans = 0
    let premap = new Map<number, number>()
    premap.set(0, 1)
    let len = nums.length
    let sum=0
    for (let i = 0; i < len; i++){
        sum += nums[i]
        if (premap.has(sum - k)) {
            ans += premap.get(sum - k)!;
        }
        premap.set(sum, (premap.get(sum) || 0) + 1);
    }
    return ans
}
