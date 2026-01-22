import { TreeNode } from "./treenode";
function isValidBST(root: TreeNode | null): boolean {
    function deep(root: TreeNode | null, min: number, max: number):boolean {
        if (!root) return true
        if (root.val <= min || root.val >= max) return false
        return deep(root.left,min,root.val)&&deep(root.right,root.val,max)
    }
    return deep(root,-Infinity,Infinity)
};