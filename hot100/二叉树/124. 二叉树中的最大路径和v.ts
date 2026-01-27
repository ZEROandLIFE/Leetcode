import { TreeNode } from "./treenode";

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;

  function maxGain(node: TreeNode | null): number {
    if (!node) return 0;

    // 递归计算左右子树的最大贡献值（如果为负则取 0）
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    // 当前节点作为路径根节点的路径和
    const priceNewPath = node.val + leftGain + rightGain;

    // 更新全局最大路径和
    maxSum = Math.max(maxSum, priceNewPath);

    // 返回当前节点的最大贡献值（只能选左或右）
    return node.val + Math.max(leftGain, rightGain);
  }

  maxGain(root);
  return maxSum;
}