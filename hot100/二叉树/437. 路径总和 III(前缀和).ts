import { TreeNode } from "./treenode";
function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  const prefixSumMap = new Map<number, number>();
  prefixSumMap.set(0, 1); // 初始前缀和为0出现1次

  const dfs = (node: TreeNode | null, currSum: number) => {
    if (!node) return;

    currSum += node.val;
    // 查找是否有前缀和等于 currSum - targetSum
    count += prefixSumMap.get(currSum - targetSum) || 0;
    // 更新当前前缀和的出现次数
    prefixSumMap.set(currSum, (prefixSumMap.get(currSum) || 0) + 1);

    // 递归处理左右子树
    dfs(node.left, currSum);
    dfs(node.right, currSum);

    // 回溯：恢复前缀和的出现次数
    prefixSumMap.set(currSum, prefixSumMap.get(currSum)! - 1);
  };

  dfs(root, 0);
  return count;
}
