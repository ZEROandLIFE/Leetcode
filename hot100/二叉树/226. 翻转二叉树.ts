import { TreeNode } from "./treenode";
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const left: null | TreeNode = root.left;
    const right: null | TreeNode = root.right;
    root.left = right;
    root.right = left;
    invertTree(right);
    invertTree(left);
    return root
}
