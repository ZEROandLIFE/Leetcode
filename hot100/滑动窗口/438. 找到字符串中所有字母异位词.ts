function findAnagrams(s: string, p: string): number[] {

    let pcount = 0
    let plen = p.length
    let slen = s.length
    let nowcount = 0
    let ans:number[]=[]
    for (let i = 0; i < plen; i++){
        let charnum = p.charCodeAt(i)
        let snum = s.charCodeAt(i);
        nowcount += snum*snum*snum
        pcount += charnum*charnum*charnum
    }
    if (pcount === nowcount)
        ans.push(0)
    for (let i = 1; i <= slen - plen; i++){
        
        
        let snum = s.charCodeAt(i-1);
        let nownum = s.charCodeAt(i + plen-1);

        nowcount -= snum * snum * snum;
        nowcount += nownum * nownum * nownum;

        if (pcount === nowcount) ans.push(i);

    }

    return ans;
}
