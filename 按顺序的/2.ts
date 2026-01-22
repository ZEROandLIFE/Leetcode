//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }

function addTwoNumbers(
  l1: DoubleLinkListNode | null,
  l2: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  const dummy = new DoubleLinkListNode(0); // 哑节点，简化头节点处理
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    // 获取当前节点的值，如果链表已结束则用 0 代替
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // 计算和及进位
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new DoubleLinkListNode(sum % 10);

    // 移动指针
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
