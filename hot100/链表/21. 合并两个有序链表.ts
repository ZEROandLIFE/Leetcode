// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function mergeTwoLists(
  list1: DoubleLinkListNode | null,
  list2: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  let ans: DoubleLinkListNode | null = new DoubleLinkListNode(0, null);
  let res = ans;
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      ans.next = list2;
      ans = list2;
      list2 = list2.next;
    } else {
      ans.next = list1;
      ans = list1;
      list1 = list1.next;
    }
  }
  while (list1 !== null) {
    ans.next = list1;
    ans = list1;
    list1 = list1.next;
  }
  while (list2 !== null) {
    ans.next = list2;
    ans = list2;
    list2 = list2.next;
  }
  return res.next;
}
