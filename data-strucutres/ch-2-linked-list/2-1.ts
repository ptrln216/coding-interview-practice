import { ListNode } from "./helpers";

/* ------------------------------- Remove Dups ------------------------------ */
/**
 * Use hash table to store values
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode<T>} head
 * @returns {ListNode<T>}
 */
export function removeDups<T>(head: ListNode<T>): ListNode<T> {
  const set = new Set();
  let cur = head;

  set.add(cur.value);

  while (cur.next) {
    if (set.has(cur.next.value)) {
      cur.next = cur.next.next;
    } else {
      set.add(cur.next.value);
      cur = cur.next;
    }
  }

  return head;
}

/**
 * Use two pointers, cur and next
 *
 * Time: O(n^2)
 * Space: O(1)
 *
 * @param {ListNode<T>} head
 * @returns {ListNode<T>}
 */
export function removeDupsWithNoExtraBuffer<T>(head: ListNode<T>): ListNode<T> {
  let cur: ListNode<T> | null = head;

  while (cur) {
    let i = cur;

    while (i.next) {
      if (cur.value === i.next.value) i.next = i.next.next;
      else i = i.next;
    }

    cur = cur.next;
  }

  return head;
}
