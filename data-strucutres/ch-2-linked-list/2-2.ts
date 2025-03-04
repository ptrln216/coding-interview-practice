import { ListNode } from "./helpers";

/* --------------------------- Return Kth To Last --------------------------- */
/**
 * Use two pointers, p2 is k elements away from p1,
 * so that when p2 hits the end, p1 will be at kth-to-last position
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number} kth
 * @param {ListNode<T>} list
 * @returns {T | null}
 */
export function kthToLast<T>(kth: number, head: ListNode<T>): T | null {
  if (kth <= 0) return null;

  let p1 = head;
  let p2: ListNode<T> | null = head;

  for (let i = 0; i < kth; ++i) {
    if (!p2) return null; // k is longer than the list
    p2 = p2?.next;
  }

  while (p2) {
    p1 = p1.next!;
    p2 = p2.next;
  }

  return p1.value;
}

/**
 * Iterate through the linked list, and recursively return until the counts reaches kth
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} kth
 * @param {ListNode<T>} head
 * @returns {ListNode<T> | null}
 */
export function kthToLastRecursive<T>(kth: number, head: ListNode<T>) {
  const find = (
    node: ListNode<T> | null = null,
    k: number,
    memory: { count: number }
  ) => {
    // base case - return null when reach the end
    if (!node) return null;
    let result = find(node.next, k, memory);
    memory.count++;
    if (memory.count === k) return node.value;
    return result;
  };

  return find(head, kth, { count: 0 });
}
