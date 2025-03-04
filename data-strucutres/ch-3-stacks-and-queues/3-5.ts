/* ------------------------------- Sort Stack ------------------------------- */

/**
 * Sort original stack's elements one by one.
 *
 * Time: O(n^2)
 * Space: O(n)
 *
 * @param {Stack} stack
 * @returns {Stack}
 */
export function sortStack(stack: Stack): Stack {
  const tmp = new Stack();

  // O(n)
  while (!stack.isEmpty()) {
    const top = stack.pop()!;

    let count = 0;
    // O(n)
    while (!tmp.isEmpty() && tmp.peek() < top) {
      stack.push(tmp.pop()!);
      count++;
    }

    tmp.push(top);
    // O(n)
    for (let i = 0; i < count; ++i) {
      tmp.push(stack.pop()!);
    }
    count = 0;
  }

  return tmp;
}

export class Stack {
  stk: number[];

  constructor() {
    this.stk = [];
  }

  push(item: number) {
    this.stk.push(item);
  }

  pop() {
    return this.stk.pop();
  }

  peek() {
    return this.stk[this.stk.length - 1];
  }

  isEmpty() {
    return this.stk.length === 0;
  }

  toArray() {
    return this.stk.slice();
  }
}
