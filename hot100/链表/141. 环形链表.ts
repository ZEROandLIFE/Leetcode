// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
//快慢指针
function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (fast !== null &&fast!.next !== null ) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
//摧毁链表时候
// function hasCycle(head: ListNode | null): boolean {
//   if (!head || !head.next) {
//     return false; // 空链表或单节点无环
//   }
//   let flag = false;
//   let prev = head;
//   let cur = head.next;
//   const TEMP = new ListNode(); // 标记节点
//   prev.next = TEMP; // 标记第一个节点

//   while (cur) {
//     if (cur.next === TEMP) {
//       // 如果当前节点的next指向标记节点，说明有环
//       flag = true;
//       break;
//     } else {
//       prev = cur; // 移动prev
//       cur = cur.next; // 移动cur
//       prev.next = TEMP; // 标记当前节点
//     }
//   }

//   return flag;
// }
