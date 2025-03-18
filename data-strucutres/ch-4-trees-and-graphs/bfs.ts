import { TreeNode } from "./helpers";

/**
 * Breadth first search
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
export function bfs(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const current = queue.shift()!;
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
}
