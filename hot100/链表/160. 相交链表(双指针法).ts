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
  let lena = 0;
  let lenb = 0;
  let cura = headA;
  let curb = headB;
  while (cura !== null) {
    cura = cura.next;
    lena++;
  }
  while (curb !== null) {
    curb = curb.next;
    lenb++;
  }
  let cha = 0;
  if (lena > lenb) {
    cha = lena - lenb;
    while (cha) {
      headA = headA!.next;
      cha--;
    }
  } else {
    cha = lenb - lena;
    while (cha) {
      headB = headB!.next;
      cha--;
    }
  }
  while (headA && headB) {
    if (headA !== headB) {
      headB = headB!.next;
      headA = headA!.next;
    } else return headA;
  }
  return null;
}
