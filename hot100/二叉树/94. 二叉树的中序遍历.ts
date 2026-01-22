import { TreeNode } from "./treenode";
function inorderTraversal(root: TreeNode | null): number[] { 
    if(!root) return []
    const ans: number[] = []
    ans.push(...inorderTraversal(root!.left));
    ans.push(root!.val)
    ans.push(...inorderTraversal(root!.right));
    return ans
}
