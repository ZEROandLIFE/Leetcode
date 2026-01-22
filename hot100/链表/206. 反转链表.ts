// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function reverseList(
  head: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  let pre = null;
  let cur = head;
  let next = head?.next;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
