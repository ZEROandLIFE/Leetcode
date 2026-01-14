/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const newmap = new Map()
    for (str of strs) {
        const count = new Array(26).fill(0)
        for (char of str) {
            count[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        const hashstr = count.join('.')
        if (!newmap.has(hashstr)) {
            newmap.set(hashstr,[])
        }
        newmap.get(hashstr).push(str)

    }
    return Array.from(newmap.values())
};
