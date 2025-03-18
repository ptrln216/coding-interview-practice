import { TreeNode } from "./helpers";
/* ------------------------------ Minimal Trees ----------------------------- */

/**
 * Divide and conqeur (recursion), find and create TreeNode for the middle point of the array.
 *
 * n = |elements in array|
 *
 * Time: O(n)
 * Spcae: O(n)
 *
 * @param {number[]} arr
 * @returns {TreeNode | null}
 */
export function sortedArrayToBST(arr: number[]): TreeNode | null {
  if (!arr.length) return null;

  function dfs(l: number, r: number): TreeNode | null {
    if (l > r) return null;
    const mid = Math.floor((l + r) / 2);
    return new TreeNode(arr[mid], dfs(l, mid - 1), dfs(mid + 1, r));
  }

  return dfs(0, arr.length - 1);
}
