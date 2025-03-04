/* ---------------------------- Queue Via Stacks ---------------------------- */

export class MyQueue {
  eStack: number[];
  dStack: number[];

  constructor() {
    this.eStack = [];
    this.dStack = [];
  }

  private _ensureDStack() {
    if (this.dStack.length === 0) {
      while (this.eStack.length) {
        this.dStack.push(this.eStack.pop()!);
      }
    }
  }

  // Time: O(1)
  enqueue(item: number) {
    this.eStack.push(item);
  }

  // Time: O(1) amortized
  dequeue() {
    if (this.isEmpty()) return -1;

    this._ensureDStack();
    return this.dStack.pop();
  }

  // Time: O(1) amortized
  peek() {
    if (this.isEmpty()) return -1;
    this._ensureDStack();
    return this.dStack[this.dStack.length - 1];
  }

  // Time: O(1)
  isEmpty() {
    return this.eStack.length === 0 && this.dStack.length === 0;
  }
}
