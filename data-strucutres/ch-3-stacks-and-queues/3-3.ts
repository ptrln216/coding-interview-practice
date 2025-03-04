/* ----------------------------- Stack Of Plates ---------------------------- */

export class SetOfStacks {
  threshold: number;
  stacks: Stack[];

  constructor(capacity: number = 5) {
    this.threshold = capacity;
    this.stacks = [];
  }

  private getLastStack() {
    return this.stacks.length > 0 ? this.stacks[this.stacks.length - 1] : null;
  }

  push(item: number) {
    const lastStack = this.getLastStack();
    if (lastStack) {
      if (lastStack.isFull()) {
        const newStack = new Stack(this.threshold);
        newStack.push(item);
        this.stacks.push(newStack);
      } else {
        lastStack.push(item);
      }
    } else {
      const newStack = new Stack(this.threshold);
      newStack.push(item);
      this.stacks.push(newStack);
    }
  }

  pop() {
    const lastStack = this.getLastStack();
    if (lastStack) {
      const res = lastStack.pop();
      if (lastStack.isEmpty()) {
        this.stacks.pop();
      }
      return res;
    }
    return -1;
  }

  popAt(index: number) {
    if (index < 0 || index >= this.stacks.length) return -1;

    const stack = this.stacks[index];
    const res = stack.pop();
    if (stack.isEmpty()) {
      this.stacks.splice(index, 1);
    }
    return res;
  }

  peek() {
    const lastStack = this.getLastStack();
    return lastStack ? lastStack.peek() : -1;
  }

  isEmpty() {
    return this.stacks.length === 0;
  }
}

class Stack {
  stk: number[];
  capacity: number = 5;

  constructor(capacity: number) {
    this.stk = [];
    this.capacity = capacity;
  }

  push(item: number) {
    this.stk.push(item);
  }

  pop() {
    return this.stk.length > 0 ? this.stk.pop() : -1;
  }

  peek() {
    return this.stk.length > 0 ? this.stk[this.stk.length - 1] : -1;
  }

  isEmpty() {
    return this.stk.length === 0;
  }

  isFull() {
    return this.stk.length === this.capacity;
  }
}
