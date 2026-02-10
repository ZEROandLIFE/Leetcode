class TrieNode {
  children: TrieNode[];
  isEnd: boolean;

  constructor() {
    this.children = new Array(26).fill(null); // 26个小写字母
    this.isEnd = false; // 标记是否是单词的结尾
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // 插入单词
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0); // 计算字符的索引（0-25）
      if (!node.children[index]) {
        node.children[index] = new TrieNode(); // 如果子节点不存在，则创建
      }
      node = node.children[index]; // 移动到子节点
    }
    node.isEnd = true; // 标记单词结束
  }

  // 搜索单词
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[index]) {
        return false; // 如果子节点不存在，说明单词不存在
      }
      node = node.children[index];
    }
    return node.isEnd; // 只有标记为单词结尾才是完整的单词
  }

  // 检查是否有以 prefix 为前缀的单词
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[index]) {
        return false; // 如果子节点不存在，说明前缀不存在
      }
      node = node.children[index];
    }
    return true; // 前缀存在（不需要是完整单词）
  }
}
