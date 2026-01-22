// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function swapPairs(head: DoubleLinkListNode | null): DoubleLinkListNode | null {
  const dummy = new DoubleLinkListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    const first = curr;
    const second = curr.next;
    const next = second.next;

    // 交换节点
    prev.next = second;
    second.next = first;
    first.next = next;

    // 更新指针
    prev = first;
    curr = next;
  }

  return dummy.next;
}
