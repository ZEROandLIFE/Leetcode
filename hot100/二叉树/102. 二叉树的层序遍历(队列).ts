import { TreeNode } from "./treenode";
function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = [];
  if (!root) return ans;

  const q: TreeNode[] = [root]; // 队列
  while (q.length) {
    const size = q.length; // 当前层节点数
    const level: number[] = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift()!; // 出队
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(level);
  }
  return ans;
}