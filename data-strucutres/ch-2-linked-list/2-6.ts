import { ListNode } from "./helpers";

/* ------------------------------- Palindrome ------------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Reverse the linked list to a stack, then compare linked list and the stack
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode<T>} head
 * @returns {boolean}
 */
export function isPalindromeStack<T>(head: ListNode<T>): boolean {
  // Time: O(n)
  // Space: O(n)
  let cur: ListNode<T> | null = head;
  let arr: T[] = [];
  while (cur) {
    arr.push(cur.value);
    cur = cur.next;
  }

  // Time: O(n/2)
  // Space: O(1)
  for (let i = 0; i < arr.length / 2; ++i) {
    if (head.value !== arr.pop()) return false;
    head = head.next!;
  }

  return true;
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use recursion to iterate backwards from the end, meanwhile compare with the forward order pointer
 *
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode<T>} head
 * @returns {boolean}
 */
export function isPalindromeRecursive<T>(head: ListNode<T>): boolean {
  let l: ListNode<T> | null = head;

  // Time: O(n) + O(n) traverse and return
  // Space: O(n)
  const checkPalindrome = (node: ListNode<T> | null) => {
    // base case, traverse to the end of list and return
    if (!node) return true;
    const res = checkPalindrome(node.next);
    if (res && l?.value === node.value) {
      l = l.next;
      return true;
    }
    return false;
  };

  return checkPalindrome(head);
}

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 3 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use fast & slow pointers to reach the mid point first, then reverse the second half list (with slow pointer),
 * reset the fast pointer to list head, start comparing the first half and the reversed second half list.
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode<T> | null} head
 * @returns {boolean}
 */
export function isPalindromeTwoPointers<T>(head: ListNode<T>): boolean {
  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  // Time: O(n/2)
  // Space: O(1)
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Time: O(n/2)
  // Space: O(1)
  slow = reverseList(slow);
  fast = head;

  // TIme: O(n/2)
  // Space: O(1)
  while (slow) {
    if (slow.value !== fast.value) {
      return false;
    }
    slow = slow.next;
    fast = fast?.next!;
  }

  return true;
}

function reverseList<T>(head: ListNode<T>): ListNode<T> | null {
  let prev: ListNode<T> | null = null;
  let cur: ListNode<T> | null = head;

  while (cur) {
    const ref = cur.next;
    cur.next = prev;
    prev = cur;
    cur = ref;
  }

  return prev;
}
