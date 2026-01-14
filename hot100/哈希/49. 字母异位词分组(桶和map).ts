function groupAnagrams(strs: string[]): string[][] {
    const newmap = new Map<string, string[]>()
    for (const str of strs) {
        const count:number[]=new Array(26).fill(0)
        for (const char of str) {
            count[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        const hashstr: string = count.join(".")
        if (!newmap.has(hashstr)) {
            newmap.set(hashstr,[]);
        }
        newmap.get(hashstr)!.push(str)
    }
    return Array.from(newmap.values())
}
