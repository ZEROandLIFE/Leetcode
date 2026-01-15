function lengthOfLongestSubstring(s: string): number {
    let charset = new Set<string>()
    let left = 0
    let len = s.length
    let maxlen = 0
    for (let right = 0; right < len; right++){
        let char=s.charAt(right)
        while (charset.has(char)) {
            charset.delete(s.charAt(left))
            left++
        }
        charset.add(char);
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen
}
