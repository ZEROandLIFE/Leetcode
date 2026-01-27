import { TreeNode } from "./treenode";
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  // 根节点的值是先序遍历的第一个元素
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  // 在中序遍历中找到根节点的位置
  const rootIndexInInorder = inorder.indexOf(rootVal);
  // 划分左子树和右子树的中序遍历序列
  const leftInorder = inorder.slice(0, rootIndexInInorder);
  const rightInorder = inorder.slice(rootIndexInInorder + 1);
  // 左子树的先序遍历序列长度 = 左子树的中序遍历序列长度
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}
