// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function getIntersectionNode(
  headA: DoubleLinkListNode | null,
  headB: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  let visit = new Set<DoubleLinkListNode | null>();
  let a = headA;
  let b = headB;
  while (a !== null) {
    visit.add(a);
    a = a!.next;
  }
  while (b !== null) {
    if (visit.has(b)) {
      return b;
    } else b = b!.next;
  }
  return null;
}
