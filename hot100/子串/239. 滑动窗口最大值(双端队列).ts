function maxSlidingWindow(nums: number[], k: number): number[] {
    let ans:number[] = []
    let deq:number[]=[]
    let len=nums.length
    for (let i = 0; i < len; i++){
        while (deq.length > 0 && i - deq[0] >= k) {
            deq.shift()
        }
        //  console.log("1", deq, ans);
        while (deq.length > 0 && nums[i] > nums[deq[deq.length - 1]]) {
            deq.pop()
        }
        //  console.log("2", deq, ans);
        deq.push(i)
        if (i + 1 >= k) {
            ans.push(nums[deq[0]]);
        }
        // console.log('3',deq,ans);
        
    }
    return ans
}
