/* -------------------------------- One Away -------------------------------- */
/**
 * Use two pointers to simulate deletion when strings are not the same length
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function isOneEditAway(s1: string, s2: string): boolean {
  let len = s1.length - s2.length;
  if (Math.abs(len) > 1) return false;

  let editQuota = 1;
  for (let i = 0, j = 0; i < s1.length && j < s2.length; ++i, ++j) {
    // two pointers
    if (s1[i] !== s2[j]) {
      if (!editQuota) return false;

      editQuota--;

      if (s1.length > s2.length) --j;
      else if (s1.length < s2.length) --i;
    }
  }

  return true;
}
