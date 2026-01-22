import { TreeNode } from "./treenode";
function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;
    function dfs(root: TreeNode | null):number {
        if (!root) return 0
        let left:number = dfs(root.left)
        let right: number = dfs(root.right);
        ans = Math.max(ans, left + right)
        return Math.max(left , right)+1
    }
    dfs(root)
  return ans;
}