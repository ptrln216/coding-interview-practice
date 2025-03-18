import { TreeNode } from "./helpers";

/**
 * Iterative approach to do depth first search
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
export function dfsIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const stack: TreeNode[] = [root];

  while (stack.length) {
    const current = stack.pop()!;
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

/**
 * Recursive approach to do depth first search
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
export function dfsRecursive(root: TreeNode | null): number[] {
  if (!root) return [];
  const left = dfsRecursive(root.left);
  const right = dfsRecursive(root.right);
  return [root.value, ...left, ...right];
}
