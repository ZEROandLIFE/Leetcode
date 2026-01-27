import { TreeNode } from "./treenode";
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const n = preorder.length;

  const map = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  const dfs = (
    left: number,
    right: number,
    inorderLeft: number
  ): TreeNode | null => {
    if (left > right) {
      return null;
    }

    const node = new TreeNode(preorder[left]);
    const inorderIndex = map.get(preorder[left]);
    const leftLen = inorderIndex! - inorderLeft;

    node.left = dfs(left + 1, left + leftLen, inorderLeft);
    node.right = dfs(left + leftLen + 1, right, inorderIndex! + 1);

    return node;
  };

  return dfs(0, n - 1, 0);
}
