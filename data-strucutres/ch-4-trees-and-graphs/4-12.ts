import { TreeNode } from "./helpers";

/* ----------------------------- Paths With Sum ----------------------------- */

/**
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @param {number} targetSum
 * @returns {number}
 */
export function pathsWithSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  let paths = 0;
  const m = new Map([[0, 1]]);

  function dfs(node: TreeNode | null, curSum: number) {
    if (!node) return;
    curSum += node.value;
    paths += m.get(curSum - targetSum) ?? 0;
    m.set(curSum, (m.get(curSum) ?? 0) + 1);
    if (node.left) dfs(node.left, curSum);
    if (node.right) dfs(node.right, curSum);
    m.set(curSum, m.get(curSum)! - 1);
  }

  dfs(root, 0);
  return paths;
}
