class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  const map = new Map<_Node, _Node>();
  let current: _Node | null = head;
  while (current) {
    map.set(current, new _Node(current.val));
    current = current.next;
  }
  current = head;
  while (current) {
    const newNode = map.get(current)!;
      newNode.next = current.next ? map.get(current.next)! : null;
      newNode.random = current.random ? map.get(current.random)! : null;
      current = current.next;
  }
  return map.get(head)!;
}

// function copyRandomList(head: _Node | null): _Node | null {
//   if (!head) return null;

//   const map = new Map<_Node, _Node>();
//   let current: _Node | null = head;
//   while (current) {
//     map.set(current, new _Node(current.val));
//     current = current.next;
//   }
//   current = head;
//   while (current) {
//     const newNode = map.get(current)!;
//     if (current.next) {
//       newNode.next = map.get(current.next)!;
//     } else {
//       newNode.next = null;
//     }
//     if (current.random) {
//       newNode.random = map.get(current.random)!;
//     } else {
//       newNode.random = null;
//       }
//        current = current.next;
//   }
//   return map.get(head)!;
// }

// function copyRandomList(head: _Node | null): _Node | null {
//   if (!head) return null;

//   const map = new Map<_Node, _Node>();
//   let current: _Node | null = head;

//   // 第一次遍历：创建所有新节点，并建立原节点到新节点的映射
//   while (current) {
//     map.set(current, new _Node(current.val));
//     current = current.next;
//   }

//   current = head;
//   // 第二次遍历：设置新节点的next和random指针
//   while (current) {
//     const newNode = map.get(current)!;
//     newNode.next = current.next ? map.get(current.next)! : null;
//     newNode.random = current.random ? map.get(current.random)! : null;
//     current = current.next;
//   }

//   return map.get(head)!;
// }
