import { GraphNode, Queue } from "./4-1.utils";

/* --------------------------- Route Between Nodes -------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * BFS to search from node1 to node2
 *
 * n = |vertices|
 * m = |edges|
 *
 * Time: O(m+n)
 * Space: O(n)
 *
 * @param {GraphNode} from
 * @param {GraphNode} to
 * @returns {boolean}
 */
export function hasRouteBFS(from: GraphNode, to: GraphNode): boolean {
  if (from === to) return true;

  const visited = new Set<GraphNode>();
  let queue = new Queue<GraphNode>();
  queue.enqueue(from);

  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    if (node.hasEdge(to)) return true;

    visited.add(node);

    for (const neighbor of node.getNeighbors()) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
      }
    }
  }

  return false;
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * DFS
 *
 * n = |vertices|
 * m = |edges|
 *
 * Time: O(m+n)
 * Space: O(n)
 *
 * @param {GraphNode} from
 * @param {GraphNode} to
 * @returns {boolean}
 */
export function hasRouteDFS(from: GraphNode, to: GraphNode): boolean {
  return dfs(from, to, new Set<GraphNode>());
}

function dfs(from: GraphNode, to: GraphNode, visited: Set<GraphNode>) {
  if (from === to) return true;

  visited.add(from);

  const neighbors = from.getNeighbors();
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      if (dfs(neighbor, to, visited)) return true;
    }
  }

  return false;
}
