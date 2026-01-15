function lengthOfLongestSubstring(s: string): number {
    let maxlen = 0
    let left = 0
    let charmap = new Map<string, number>()
    let len=s.length
    for (let right = 0; right < len; right++){
        let char = s.charAt(right)
        if (charmap.has(char) && charmap.get(char)! >= left) {
            left = charmap.get(char)!+1
        }
        charmap.set(char, right)
        maxlen=Math.max(maxlen,right-left+1)
    }
    return maxlen
}
