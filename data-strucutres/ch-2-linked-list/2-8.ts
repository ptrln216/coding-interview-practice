import { ListNode } from "./helpers";

/* ----------------------------- Loop Detection ----------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use hash table to store appeared nodes
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode<T> | null} head
 * @returns {ListNode<T> | null}
 */
export function detectLoopHashTable<T>(
  head: ListNode<T> | null
): ListNode<T> | null {
  const set = new Set();

  let cur: ListNode<T> | null = head;
  while (cur) {
    if (set.has(cur)) {
      return cur;
    } else {
      set.add(cur);
    }
    cur = cur.next;
  }

  return null;
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use two pointers, runner will catch up walker at certain point if there's a loop.
 * Otherwise return null when runner hits the end.
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode<T> | null} head
 * @returns {ListNode<T> | null}
 */
export function detectLoopChase<T>(
  head: ListNode<T> | null
): ListNode<T> | null {
  let walker = head;
  let runner = head;

  while (runner && runner.next) {
    walker = walker?.next ?? null;
    runner = runner.next.next;
    if (walker === runner) return runner;
  }

  return null;
}
