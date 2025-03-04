import { ListNode } from "./helpers";

/* -------------------------------- Partition ------------------------------- */
/**
 * Store partitions in two different linked list, and concatenate them at last
 *
 * Time: O(n)
 * Space: O(1) - as new structures are not created, original list is being manipulated
 *
 * @param {ListNode<number>} head
 * @param {number} target
 * @returns {ListNode<number>}
 */
export function partition(
  head: ListNode<number>,
  target: number
): ListNode<number> {
  let less = new ListNode<number>(0);
  let greater = new ListNode<number>(0);

  let cur: ListNode<number> | null = head;
  let lessCur = less;
  let greaterCur = greater;

  while (cur) {
    const next = cur.next;
    cur.next = null;

    if (cur.value < target) {
      lessCur.next = cur;
      lessCur = lessCur.next;
    } else {
      greaterCur.next = cur;
      greaterCur = greaterCur.next;
    }

    cur = next;
  }

  lessCur.next = greater.next;

  return less.next!;
}
