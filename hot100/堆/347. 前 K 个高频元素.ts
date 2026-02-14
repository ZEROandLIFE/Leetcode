function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  const heap = new hhheap<[number, number]>((a, b) => a[1] - b[1]);
  for (const [num, freq] of frequencyMap) {
    if (heap.size() < k) {
      heap.push([num, freq]);
    } else if (freq > heap.peek()[1]) {
      heap.pop();
      heap.push([num, freq]);
    }
  }
  return heap.toArray().map(([num]) => num);
}
class hhheap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
  }

  push(val: T): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.bubbleDown(0);
    }
    return top;
  }

  peek(): T {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): T[] {
    return [...this.heap];
  }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[idx], this.heap[parentIdx]) >= 0) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  private bubbleDown(idx: number): void {
    const lastIdx = this.heap.length - 1;
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let smallestIdx = idx;
      if (
        leftChildIdx <= lastIdx &&
        this.compare(this.heap[leftChildIdx], this.heap[smallestIdx]) < 0
      ) {
        smallestIdx = leftChildIdx;
      }
      if (
        rightChildIdx <= lastIdx &&
        this.compare(this.heap[rightChildIdx], this.heap[smallestIdx]) < 0
      ) {
        smallestIdx = rightChildIdx;
      }
      if (smallestIdx === idx) break;
      [this.heap[idx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[idx],
      ];
      idx = smallestIdx;
    }
  }
}
