/* ----------------------------- String Rotation ---------------------------- */
/**
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function isRotation(s1: string, s2: string): boolean {
  return s1.length === s2.length ? isSubstring(s1, s2 + s2) : false;
}

const isSubstring = (str: string, base: string): boolean => base.includes(str);
