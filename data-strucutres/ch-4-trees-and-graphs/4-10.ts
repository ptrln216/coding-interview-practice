import { TreeNode } from "./helpers";

/* ------------------------------ Check Subtree ----------------------------- */

/**
 * DFS - Check all nodes, compare them with the target subtree
 *
 * n = |nodes in root tree|
 * m = |nodes in target tree|
 *
 * Time: O(mn)
 * Space: O(m+n)
 *
 * @param {TreeNode | null} root
 * @param {TreeNode | null} target
 * @returns {boolean}
 */
export function checkSubtree(
  root: TreeNode | null,
  target: TreeNode | null
): boolean {
  if (!target) return true;
  if (!root) return false;
  if (areIdentical(root, target)) return true;

  return checkSubtree(root.left, target) || checkSubtree(root.right, target);
}

function areIdentical(n1: TreeNode | null, n2: TreeNode | null): boolean {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  if (n1.value !== n2.value) return false;

  return areIdentical(n1.left, n2.left) && areIdentical(n1.right, n2.right);
}
