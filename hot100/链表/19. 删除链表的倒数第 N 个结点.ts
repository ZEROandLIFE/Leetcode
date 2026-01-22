// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function removeNthFromEnd(
  head: DoubleLinkListNode | null,
  n: number
): DoubleLinkListNode | null {
  let newhead = new DoubleLinkListNode(0, head);
  let fast: DoubleLinkListNode | null = newhead;
  let slow: DoubleLinkListNode | null = newhead;
  while (n) {
    if (fast!.next === null) return null;
    fast = fast!.next;
    n--;
  }
  while (fast.next) {
    fast = fast!.next;
    slow = slow!.next;
  }
  slow!.next = slow!.next!.next;
  return newhead.next;
}
