import { TreeNode } from "./helpers";

/* ------------------------------ BST Sequences ----------------------------- */

/**
 * Use recursion to get left and right tree possible sequences.
 * Combine left and right sequences at each level eventually will get all possible sequences.
 *
 * m = |nodes from left subtree|
 * n = |nodes from right subtree|
 *
 * Time: O(C(m,n))
 * Space: O(C(m,n))
 *
 * @param {TreeNode | null} node
 * @returns {number[][]}
 */
export function bstSequences(node: TreeNode | null): number[][] {
  if (!node) return [[]];

  const prefix = [node.value];

  const leftSeqs = bstSequences(node.left);
  const rightSeqs = bstSequences(node.right);

  const results: number[][] = [];

  for (let left of leftSeqs) {
    for (let right of rightSeqs) {
      const weaved: number[][] = [];
      weaveSequences(left, right, weaved, prefix);
      results.push(...weaved);
    }
  }

  return results;
}

function weaveSequences(
  left: number[],
  right: number[],
  result: number[][],
  prefix: number[]
) {
  if (!left.length || !right.length) {
    result.push([...prefix, ...left, ...right]);
    return;
  }

  const leftHead = left.shift();
  prefix.push(leftHead!);
  weaveSequences(left, right, result, prefix);
  prefix.pop();
  left.unshift(leftHead!);

  const rightHead = right.shift();
  prefix.push(rightHead!);
  weaveSequences(left, right, result, prefix);
  prefix.pop();
  right.unshift(rightHead!);
}
