function groupAnagrams(strs: string[]): string[][] {
    const newmap = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const sortstr: string = strs[i].split('').sort().join('')
        if (newmap.has(sortstr)) {
            newmap.get(sortstr)!.push(strs[i])
        } else {
            newmap.set(sortstr,[strs[i]])
        }
  }
  return Array.from(newmap.values());
}
