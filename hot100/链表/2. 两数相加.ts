// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function addTwoNumbers(
  l1: DoubleLinkListNode | null,
  l2: DoubleLinkListNode | null
): DoubleLinkListNode | null {
  let head = new DoubleLinkListNode(0, null);
  let ans = head;
  let jinwei = 0;
  while (l1 !== null && l2 !== null) {
    let cur = new DoubleLinkListNode(0, null);
    if (l1.val + l2.val + jinwei >= 10) {
      cur.val = (l1.val + l2.val + jinwei) % 10;

      jinwei = 1;
    } else {
      cur.val = l1.val + l2.val + jinwei;

      jinwei = 0;
    }
    head.next = cur;
    head = cur;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1 !== null) {
    let cur = new DoubleLinkListNode(0, null);
    if (l1.val + jinwei >= 10) {
      cur.val = (l1.val + jinwei) % 10;
      jinwei = 1;
    } else {
      cur.val = l1.val + jinwei;
      jinwei = 0;
    }
    head.next = cur;
    head = cur;
    l1 = l1.next;
  }
  while (l2 !== null) {
    let cur = new DoubleLinkListNode(0, null);
    if (l2.val + jinwei >= 10) {
      cur.val = (l2.val + jinwei) % 10;
      jinwei = 1;
    } else {
      cur.val = l2.val + jinwei;
      jinwei = 0;
    }
    head.next = cur;
    head = cur;
    l2 = l2.next;
  }
  if (jinwei === 1) {
    let cur = new DoubleLinkListNode(1, null);
    head.next = cur;
    head = cur;
  }
  return ans.next;
}

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
