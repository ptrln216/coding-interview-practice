import { ListNode } from "./helpers";

/* --------------------------- Delete Middle Node --------------------------- */
/**
 *
 * Time: O(1)
 * Space: O(1)
 *
 * @param {ListNode<T>} node
 * @returns {void}
 */
export function deleteMiddle<T>(node: ListNode<T>): void {
  if (!node?.next) throw new Error("Invalid Node");

  node.value = node.next.value;
  node.next = node.next.next;
}
