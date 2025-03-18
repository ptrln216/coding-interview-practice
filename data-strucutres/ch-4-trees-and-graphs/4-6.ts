/* -------------------------------- Successor ------------------------------- */

/**
 *
 * Time: O(logn)
 * Space: O(1)
 *
 * @param {TreeNode | null} node
 * @returns {TreeNode | null}
 */
export function findSuccessor(node: TreeNode | null): TreeNode | null {
  if (!node) return null;

  // have right sub tree, should return the leftmost item of the right subtree
  if (node.right) {
    let current = node.right;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  let current = node;
  // break from the right-ish subtree, and return parent
  while (current.parent && current.parent.right === current) {
    current = current.parent;
  }

  return current.parent;
}

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;

  constructor(value: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value;
    this.left = left ?? null;
    this.right = right ?? null;
    this.parent = null;
  }
}
