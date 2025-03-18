import { TreeNode } from "./helpers";

/* ----------------------------- List Of Depths ----------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * DFS approach
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {void}
 */
export function createLevelLinkedListDFS(root: TreeNode | null) {
  const lists = new Map<number, number[]>();

  const dfs = (node: TreeNode | null, depth: number): void => {
    if (!node) return;

    if (!lists.has(depth)) {
      lists.set(depth, []);
    }
    lists.get(depth)!.push(node.value);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 1);

  return lists;
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * BFS approach, more suitable for this problem, because it's level by level.
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {TreeNode | null} root
 * @returns {Map<number, number[]>}
 */
export function createLevelLinkedListBFS(
  root: TreeNode | null
): Map<number, number[]> {
  const lists = new Map<number, number[]>();
  const queue = [{ node: root, level: 1 }];

  if (!root) return lists;

  while (queue.length) {
    const { node, level } = queue.shift()!;

    if (!lists.has(level)) {
      lists.set(level, []);
    }
    lists.get(level)!.push(node!.value);

    if (node?.left) queue.push({ node: node.left, level: level + 1 });
    if (node?.right) queue.push({ node: node.right, level: level + 1 });
  }

  return lists;
}
