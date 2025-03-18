import { TreeNode } from "./helpers";

/* ------------------------------ Validate BST ------------------------------ */

/**
 * DFS approach, better for early fail
 *
 * n = |number of nodes|
 *
 * Time: O(n)
 * Space: O(logn)
 *
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
export function checkBST(root: TreeNode | null): boolean {
  const dfs = (
    node: TreeNode | null,
    min: number | null,
    max: number | null
  ) => {
    if (!node) return true;

    if (
      (min !== null && node.value < min) ||
      (max !== null && node.value > max)
    ) {
      return false;
    }

    return dfs(node.left, min, node.value) && dfs(node.right, node.value, max);
  };

  return dfs(root, null, null);
}
