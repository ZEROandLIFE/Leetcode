function lengthOfLongestSubstring(s: string): number {
    let ans: number = 0;
    let ri: number = -1;
    const os = new Set();
    const len: number = s.length;
    for (let i = 0; i < len; i++)
    {
        if (i != 0)
        {
            os.delete(s.charAt(i-1));
        }
        while (!os.has(s.charAt(ri+1))&&ri+1<len)
        {
            os.add(s.charAt(ri + 1));
            ri++;
        }
        ans = Math.max(ans, ri - i + 1);
        // ans = Math.max(ans, os.size);并非最优，size计算很慢
    }

    return ans;
};