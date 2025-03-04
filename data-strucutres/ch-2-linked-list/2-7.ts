import { ListNode } from "./helpers";

/* ------------------------------ Intersection ------------------------------ */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * When lists are the same length, just iterate and compare.
 * If length are different, since two intersected linked list would have the same tail,
 * move ptr of the longer list forward the distance they have and start there.
 *
 * Time: O(n+m)
 * Space: O(1)
 *
 * @param {ListNode<T> | null} h1
 * @param {ListNode<T> | null} h2
 */
export function intersects<T>(
  h1: ListNode<T> | null,
  h2: ListNode<T> | null
): ListNode<T> | null {
  // Time: O(n+m)
  // Space: O(1)
  const l1 = getLength(h1);
  const l2 = getLength(h2);

  const diff = Math.abs(l1 - l2);

  // Time: O(max(m,n))
  // Space: O(1)
  let cur1: ListNode<T> | null = h1;
  let cur2 = h2;
  if (diff > 0) {
    for (let i = 0; i < diff; ++i) {
      if (l1 > l2) {
        cur1 = cur1?.next ?? null;
      } else {
        cur2 = cur2?.next ?? null;
      }
    }
  }

  // Time: O(max(m,n))
  // Space: O(1)
  while (cur1?.next) {
    if (cur1.next === cur2?.next) {
      return cur1.next;
    }
    cur1 = cur1.next;
    cur2 = cur2!.next;
  }

  return null;
}

function getLength<T>(node: ListNode<T> | null) {
  let length = 0;
  while (node) {
    node = node.next;
    length++;
  }
  return length;
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Equalize the length of the two lists by going through both of the lists.
 *
 * Time: O(m+n)
 * Space: O(1)
 *
 * @param {ListNode<T> | null} h1
 * @param {ListNode<T> | null} h2
 * @returns {ListNode<T> | null}
 */
export function intersectAt<T>(
  h1: ListNode<T> | null,
  h2: ListNode<T> | null
): ListNode<T> | null {
  let ptr1 = h1;
  let ptr2 = h2;

  // Time: O(m+n)
  // Space: O(1)
  while (ptr1 !== ptr2) {
    ptr1 = ptr1?.next ? ptr1.next : ptr2;
    ptr2 = ptr2?.next ? ptr2.next : ptr1;
  }

  return ptr1;
}
