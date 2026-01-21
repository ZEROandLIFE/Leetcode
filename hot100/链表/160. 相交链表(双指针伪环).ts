function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pA: ListNode | null = headA,
    pB: ListNode | null = headB;

  // 当 pA 和 pB 不相等时循环
  while (pA !== pB) {
    // 如果 pA 走到末尾，切换到 headB；否则继续走
    pA = pA === null ? headB : pA.next;
    // 如果 pB 走到末尾，切换到 headA；否则继续走
    pB = pB === null ? headA : pB.next;
  }

  // 返回相遇节点（可能是相交节点或 null）
  return pA;
}
