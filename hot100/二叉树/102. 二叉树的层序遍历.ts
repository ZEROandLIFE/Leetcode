import { TreeNode } from "./treenode"
function levelOrder(root: TreeNode | null): number[][] {
    let ans: number[][] = []
    function deep(root: TreeNode | null, depth: number): void {
        if(!root) return
        if (ans.length <= depth) {
          ans.push([root.val]);
        } else {
          ans[depth].push(root.val);
        }
        deep(root.left, depth + 1);
        deep(root.right, depth + 1);
    }
    deep(root,0)
    return ans
}
