import { TreeNode } from "./helpers";

/* ----------------------------- Check Balanced ----------------------------- */

/**
 * Left and right subtrees of any node in this tree should never differ more than one level, or it is unbalanced.
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
export function isBalanced(root: TreeNode | null): boolean {
  const height = (node: TreeNode | null) => {
    if (!node) return 0;

    const lHeight = height(node?.left);
    const rHeight = height(node?.right);

    if (lHeight === -1 || rHeight === -1 || Math.abs(lHeight - rHeight) > 1) {
      return -1; // means unbalanced
    }

    return Math.max(lHeight, rHeight) + 1;
  };

  return height(root) !== -1;
}
