/* ---------------------------- Check Permutation --------------------------- */
/**
 * Use two hash tables for s1 and s2, if s1 and s2 are permutations of each other,
 * then they should have identical hash table
 *
 * Time: O(n+m)
 * Space: O(n+m)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function checkPermutationHashTable(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const dict1 = {};
  const dict2 = {};
  for (const ch of s1) {
    if (dict1[ch]) dict1[ch] += 1;
    else dict1[ch] = 1;
  }
  for (const ch of s2) {
    if (dict2[ch]) dict2[ch] += 1;
    else dict2[ch] = 1;
  }
  for (const ch of s1) {
    if (dict1[ch] !== dict2[ch]) return false;
  }
  return true;
}

/**
 * Sort two strings first, if they're permutations of each other,
 * they should have identical sorted array then.
 *
 * Time: O(mlgm+nlgn)
 * Space: O(m+n)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function checkPermutationSorted(s1: string, s2: string): boolean {
  const sorted1 = Array.from(s1).sort();
  const sorted2 = Array.from(s2).sort();
  return sorted1.every((v, i) => v === sorted2[i]);
}
