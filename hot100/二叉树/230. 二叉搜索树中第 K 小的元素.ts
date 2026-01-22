import { TreeNode } from "./treenode";
function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = -1;
  function deepseek(root: TreeNode | null) {
    if (!root || k < 1) return;
    deepseek(root!.left);
    if (k === 1) {
      ans = root!.val;
      }
      k--;
    deepseek(root!.right);
    }
    deepseek(root)
  return ans;
}
