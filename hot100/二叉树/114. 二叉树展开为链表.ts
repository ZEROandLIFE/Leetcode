import { TreeNode } from "./treenode";
function flatten(root: TreeNode | null): void {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let predecessor = curr.left;
      while (predecessor.right) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
}