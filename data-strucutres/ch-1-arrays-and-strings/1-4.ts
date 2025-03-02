/* ------------------------- Palindrome Permutataion ------------------------ */
/**
 * Calculate the number of every character, there should be at most one odd number.
 * Note that space doesn't matter in this problem.
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
export function couldBePalindrome(str: string): boolean {
  let set = new Set();
  for (let ch of str) {
    if (ch === " ") continue;
    if (set.has(ch)) set.delete(ch);
    else set.add(ch);
  }
  const size = set.size;
  return size === 0 || size === 1;
}
