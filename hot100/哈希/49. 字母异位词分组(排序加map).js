/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let newmap = new Map()
    for (const str of strs) {
        const sortstr = str.split('').sort().join('')
        if (!newmap.has(sortstr)) {
            newmap.set(sortstr,[])
        }
        newmap.get(sortstr).push(str)
        
    }
    return Array.from(newmap.values())
};
