// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    let fast = head
    let slow = head
    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    let pre = null;
    let cur = slow.next;
    let next = slow?.next;
    while (cur !== null) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    let p1 = head;
    let p2 = pre;
    let result = true;
    while (p2 !== null) {
      if (p1.val !== p2.val) {
       return false
      }
      p1 = p1.next!;
      p2 = p2.next;
    }

    return true
}
