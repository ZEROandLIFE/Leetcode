// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
    let visit = new Set<ListNode | null>();
    let a = headA
    let b = headB
    while (a!== null) {
        visit.add(a)
        a=a!.next
    }
    while (b !== null) {
        if (visit.has(b)) {
            return b
        } else
            b=b!.next
    }
  return null;
}
