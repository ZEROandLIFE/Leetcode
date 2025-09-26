function findMedianSortedArrays3(nums1: number[], nums2: number[]): number {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length)
    {
        if(nums1[i]<nums2[j])
        {
            merged.push(nums1[i]);
            i++;
        }
        else
        {
            merged.push(nums1[j]);
            j++;
        }
        
    }
    while (i < nums1.length)
    {
        merged.push(nums1[i]);
            i++;
    }
    while (j < nums2.length)
    {
        merged.push(nums2[j]);
            j++;
    }
    

    return (merged.length)%2?merged[merged.length/2]:(merged[merged.length/2]+merged[merged.length/2+1])/2;
    
}