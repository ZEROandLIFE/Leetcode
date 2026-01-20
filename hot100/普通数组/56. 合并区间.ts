function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  const merged: number[][] = [intervals[0]]
  for (let i = 1; i < len; i++) {
      const last = merged[merged.length - 1];
      const lr = last[1]; 
      const current = intervals[i];
      const cl = current[0]
      const cr = current[1];
      if (cl <= lr) {
          if(cr>lr)
          merged[merged.length - 1][1]=cr
      }
      else {
          merged.push([cl,cr])
      }
  }
  return merged;
}
