function detectCycle(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (fast !== null && fast!.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
      if (slow === fast) {
          slow = head
          while (slow !== fast) {
              slow = slow!.next;
              fast = fast!.next
          }
          return slow
    }
  }
  return null;
}
