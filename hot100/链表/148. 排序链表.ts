// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: DoubleLinkListNode | null): DoubleLinkListNode | null {
  const arr: DoubleLinkListNode[] = [];
  if (!head || !head.next) {
    return head;
  }
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;
  return arr[0];
}
