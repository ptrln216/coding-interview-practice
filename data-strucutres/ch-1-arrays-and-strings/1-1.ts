import { HashTable } from "./hash-table";

/* -------------------------------- Is Unique ------------------------------- */
/**
 * Determine if a string has all unique characters
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isUniqueByHashTable(str: string): boolean {
  const ht = new HashTable();
  for (let ch of str) {
    if (ht.get(ch)) return false;
    ht.set(ch, true);
  }
  return true;
}

/**
 * Determine if a string has all unique characters without using additional data structures
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isUniqueByObject(str: string): boolean {
  const dict = {};
  for (let ch of str) {
    if (dict[ch]) return false;
    dict[ch] = true;
  }
  return true;
}

/**
 * Determine if a string has all unique characters by using built-in data structure Set
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isUniqueBySet(str: string): boolean {
  const set = new Set();
  for (let ch of str) {
    if (set.has(ch)) return false;
    set.add(ch);
  }
  return true;
}

/**
 * Sort string first, return false when there're two repeated adjacent characters
 *
 * Time: O(nlogn)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isUniqueBySort(str: string): boolean {
  const sorted = Array.from(str).sort();
  for (let i = 1; i < sorted.length; ++i) {
    if (sorted[i] === sorted[i - 1]) return false;
  }
  return true;
}
