import { TreeNode } from "./helpers";

/* -------------------------- First Common Ancestor ------------------------- */
/**
 * Post order traverse, bottom up search for two nodes.
 *
 * Time: O(n)
 * Space: O(logn), worst case O(n)
 *
 * @param {TreeNode | null} root
 * @param {TreeNode | null} n1
 * @param {TreeNode | null} n2
 * @returns {TreeNode | null}
 */
export function firstCommonAncestor(
  root: TreeNode | null,
  n1: TreeNode | null,
  n2: TreeNode | null
): TreeNode | null {
  if (!root || root === n1 || root === n2) return root;

  const left = firstCommonAncestor(root?.left ?? null, n1, n2);
  const right = firstCommonAncestor(root?.right ?? null, n1, n2);

  return left && right ? root : left || right;
}
