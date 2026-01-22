import { TreeNode } from "./treenode";
function rightSideView(root: TreeNode | null): number[] {
    let ans: number[][] = [];
    function deep(root: TreeNode | null, depth: number): void {
      if (!root) return;
      if (ans.length <= depth) {
        ans.push([root.val]);
      } else {
        ans[depth].push(root.val);
      }
      deep(root.left, depth + 1);
      deep(root.right, depth + 1);
    }
    deep(root, 0);
    let res:number[]=[]
    for (let i = 0; i < ans.length; i++){
        let len=ans[i].length
        res.push(ans[i][len-1])
    }
    return res
};

// function rightSideView(root: TreeNode | null): number[] {
//   const res: number[] = [];

//   function dfs(node: TreeNode | null, depth: number) {
//     if (!node) return;
//     // 如果当前深度等于结果数组长度，说明是该层第一个访问的节点（右视图）
//     if (res.length === depth) {
//       res.push(node.val);
//     }
//     // 优先遍历右子树，确保右视图节点优先记录
//     dfs(node.right, depth + 1);
//     dfs(node.left, depth + 1);
//   }

//   dfs(root, 0);
//   return res;
// }