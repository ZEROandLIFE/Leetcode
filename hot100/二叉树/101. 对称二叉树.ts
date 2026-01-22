import { TreeNode } from "./treenode";
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return judge(root!.left, root!.right);
}
function judge(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if ((!root1 && root2) || (root1 && !root2)) return false;
  if (!root1 && !root2) return true;
  if (root1?.val !== root2?.val) return false;

  return judge(root1!.left, root2!.right) && judge(root1!.right, root2!.left);
}
