import { ListNode } from "./helpers";

/* -------------------------------- Sum Lists ------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                REVERSE ORDER                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Convert linked list to number and add together, then convert sum back to linked list
 *
 * Time: O(m+n)
 * Space: O(max(n,m))
 *
 * @param {ListNode<number>} n1
 * @param {ListNode<number>} n2
 * @returns {ListNode<number>}
 */
export function sumLinkedListReverseOrder(
  n1: ListNode<number>,
  n2: ListNode<number>
): ListNode<number> {
  let ans = new ListNode<number>(0);

  // Time: O(m+n)
  // Space: O(1)
  const num1 = getNumReverseOrder(n1);
  const num2 = getNumReverseOrder(n2);

  let cur = ans;
  let res = num1 + num2;

  if (!res) return ans;

  // Time: O(max(m,n))
  // Space: O(max(m,n))
  while (res) {
    const node = new ListNode<number>(res % 10);
    cur.next = node;
    cur = cur.next;
    res = Math.floor(res / 10);
  }

  return ans.next!;
}

const getNumReverseOrder = (node: ListNode<number> | null): number => {
  let res = 0;
  let digitPlace = 0;

  while (node) {
    res += node.value * Math.pow(10, digitPlace++);
    node = node.next;
  }

  return res;
};

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use recursion to add two linked list from the end, the carry will be propagated,
 * without coverting the linked list to number.
 *
 * Time: O(max(n,m))
 * Space: O(max(n,m))
 *
 * @param {ListNode<number> | null} n1
 * @param {ListNode<number> | null} n2
 * @param {number} carry
 * @returns {ListNode<number> | null}
 */
export function sumLinkedListReverseOrderRecursive(
  n1: ListNode<number> | null = null,
  n2: ListNode<number> | null = null,
  carry: number = 0
): ListNode<number> | null {
  if (!n1 && !n2 && !carry) return null;

  const sum = (n1?.value ?? 0) + (n2?.value ?? 0) + carry;
  const newNode = new ListNode<number>(sum % 10);

  newNode.next = sumLinkedListReverseOrderRecursive(
    n1?.next,
    n2?.next,
    Math.floor(sum / 10)
  );

  return newNode;
}

/* -------------------------------------------------------------------------- */
/*                                FORWARD ORDER                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 1 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use recursion to convert the linked list to number, then do the addtion.
 * In the end, transform the answer back to linked list in forward order.
 *
 * Time: O(max(m,n))
 * Space: O(max(m,n))
 *
 * @param {ListNode<number>} n1
 * @param {ListNode<number>} n2
 * @returns {ListNode<number>}
 */
export function sumLinkedListForwardOrder(
  n1: ListNode<number>,
  n2: ListNode<number>
): ListNode<number> {
  let ans = new ListNode<number>(0);

  // Time: O(m) + O(n)
  // Space: O(max(m,n))
  const num1 = getNumForwardOrder(n1, { digitPlace: -1 });
  const num2 = getNumForwardOrder(n2, { digitPlace: -1 });
  const res = num1 + num2;

  if (!res) return ans;

  // Time: O(max(m,n))
  // Space: O(max(m,n))
  let cur = ans;
  res
    .toString()
    .split("")
    .forEach((s) => {
      cur.next = new ListNode<number>(Number(s));
      cur = cur.next;
    });

  return ans.next!;
}

const getNumForwardOrder = (
  node: ListNode<number> | null,
  memory: { digitPlace: number }
): number => {
  if (!node) return 0;
  const result = getNumForwardOrder(node.next, memory);
  ++memory.digitPlace;
  return node.value * Math.pow(10, memory.digitPlace) + result;
};

/* -------------------------------------------------------------------------- */
/* ------------------------------- Solution 2 ------------------------------- */
/* -------------------------------------------------------------------------- */

/**
 * Use stack to sum up each digit in order
 *
 * Time: O(m+n)
 * Space: O(m+n)
 *
 * @param {ListNode<number>} n1
 * @param {ListNode<number>} n2
 * @returns {ListNode<number> | null}
 */
export function sumLinkedListForwardOrderStack(
  n1: ListNode<number>,
  n2: ListNode<number>
): ListNode<number> | null {
  // Time: O(m+n)
  // Space: O(m+n)
  const stack1 = convertToStack(n1);
  const stack2 = convertToStack(n2);

  let carry = 0;
  let result: ListNode<number> | null = null;

  // Time: O(max(m,n))
  // Space: O(max(m,n))
  while (stack1.length || stack2.length || carry) {
    const num1 = stack1.length > 0 ? stack1.pop()! : 0;
    const num2 = stack2.length > 0 ? stack2.pop()! : 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    const newNode = new ListNode<number>(sum % 10);
    newNode.next = result;
    result = newNode;
  }

  return result;
}

const convertToStack = (head: ListNode<number> | null): number[] => {
  const arr: number[] = [];
  while (head) {
    arr.push(head.value);
    head = head.next;
  }
  return arr;
};
