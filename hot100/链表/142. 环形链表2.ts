function detectCycle(
  head: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  let fast: DoubleLinkListNode | null = head;
  let slow: DoubleLinkListNode | null = head;
  while (fast !== null && fast!.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow;
    }
  }
  return null;
}
