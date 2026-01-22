// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function reverseKGroup(
  head: DoubleLinkListNode | null,
  k: number
): DoubleLinkListNode | null {
  if (!head || k === 1) return head;

  const dummy = new DoubleLinkListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (true) {
    // 检查是否有足够的 k 个节点
    let tail = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return dummy.next;
    }

    // 翻转 k 个节点
    const next_group = tail.next;
    let [new_head, new_tail] = reverse(prev.next, tail);

    // 连接翻转后的子链表
    prev.next = new_head;
    new_tail.next = next_group;

    // 更新 prev
    prev = new_tail;
  }
}

// 翻转 [head, tail] 区间内的节点，返回 [new_head, new_tail]
function reverse(
  head: DoubleLinkListNode,
  tail: DoubleLinkListNode
): [DoubleLinkListNode, DoubleLinkListNode] {
  let prev = tail.next;
  let curr = head;
  while (prev !== tail) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return [tail, head];
}
