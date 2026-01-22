class DoubleLinkListNode {
  key: number;
  value: number;
  pre: null | DoubleLinkListNode = null;
  next: null | DoubleLinkListNode = null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  private capacity: number;
  private len: number;
  private cache: Map<number, DoubleLinkListNode>;
  private head: DoubleLinkListNode;
  private tail: DoubleLinkListNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new DoubleLinkListNode(-1, -1); // 虚拟头节点
    this.tail = new DoubleLinkListNode(-1, -1); // 虚拟尾节点
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.len = 0;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.moveToHead(node);
      return this.cache.get(key)!.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.get(key)!.value = value;
      this.moveToHead(this.cache.get(key)!);
    } else {
      if (this.len === this.capacity) {
        this.len--;
        const deleteNode = this.removeTail();
        this.cache.delete(deleteNode.key);
      }
      this.len++;
      const node = new DoubleLinkListNode(key, value);
      this.cache.set(key, node);
      this.addToHead(node);//这里这里，不是move是直接加在前面，才导致的undefined
    }
  }
  private moveToHead(node: DoubleLinkListNode): void {
    this.deleteNode(node);
    this.addToHead(node);
  }
  private addToHead(node: DoubleLinkListNode): void {
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next!.pre = node;
    this.head.next = node;
  }
  private removeTail(): DoubleLinkListNode {
    const tailNode = this.tail.pre!;
    this.deleteNode(tailNode);
    return tailNode;
  }
    private deleteNode(node: DoubleLinkListNode): void {
      console.log(node.pre?.value, node.value, node.next?.value);
      
     node.pre!.next = node.next;
     node.next!.pre = node.pre;
  }
}
// undefined 1 undefined
// undefined 2 undefined
// 2 1 -1
// 1 2 -1
// undefined 3 undefined
// 3 1 -1
// undefined 4 undefined
// 4 3 -1
// 3 4 -1

// 2 1 -1
// 1 2 -1
// 3 1 -1
// 4 3 -1
// // 3 4 -1
// class doubleListNode {
//     key: number;
//     value: number;
//     prev: doubleListNode | null;
//     next: doubleListNode | null;

//     constructor(key: number, value: number) {
//         this.key = key;
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class LRUCache {
//     private capacity: number;
//     private cache: Map<number, doubleListNode>;
//     private head: doubleListNode;
//     private tail: doubleListNode;

//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.cache = new Map();
//         this.head = new doubleListNode(-1, -1); // 虚拟头节点
//         this.tail = new doubleListNode(-1, -1); // 虚拟尾节点
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
//     }

//     get(key: number): number {
//         if (!this.cache.has(key)) {
//             return -1;
//         }
//         const node = this.cache.get(key)!;
//         this.moveToHead(node); // 移动到头部表示最近使用
//         return node.value;
//     }

//     put(key: number, value: number): void {
//         if (this.cache.has(key)) {
//             const node = this.cache.get(key)!;
//             node.value = value; // 更新值
//             this.moveToHead(node); // 移动到头部
//         } else {
//             if (this.cache.size >= this.capacity) {
//                 const tailNode = this.removeTail(); // 删除最久未使用的节点
//                 this.cache.delete(tailNode.key); // 从哈希表中删除
//             }
//             const newNode = new doubleListNode(key, value);
//             this.cache.set(key, newNode); // 加入哈希表
//             this.addToHead(newNode); // 加入链表头部
//         }
//     }

//     private addToHead(node: doubleListNode): void {
//         // 将节点插入到头部（head之后）
//         node.prev = this.head;
//         node.next = this.head.next;
//         this.head.next!.prev = node;
//         this.head.next = node;
//     }

//     private removeNode(node: doubleListNode): void {
//         // 从链表中删除节点
//         node.prev!.next = node.next;
//         node.next!.prev = node.prev;
//     }

//     private moveToHead(node: doubleListNode): void {
//         this.removeNode(node);
//         this.addToHead(node);
//     }

//     private removeTail(): doubleListNode {
//         // 删除尾节点（tail之前）并返回
//         const tailNode = this.tail.prev!;
//         this.removeNode(tailNode);
//         return tailNode;
//     }
// }

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */