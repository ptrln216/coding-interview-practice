export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export function arrayToLinkedList<T>(arr: T[]): ListNode<T> | null {
  if (!arr.length) return null;

  const head = new ListNode<T>(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; ++i) {
    current.next = new ListNode<T>(arr[i]);
    current = current.next;
  }

  return head;
}

export function linkedListToArray<T>(head: ListNode<T> | null): T[] {
  if (!head) return [];

  let current: ListNode<T> | null = head;
  let arr: T[] = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}
