/* -------------------------------- Stack Min ------------------------------- */

export class MinStack {
  private stk: number[];
  private mins: number[]; // keeps track of the min element at every screenshot
  constructor() {
    this.stk = [];
    this.mins = [];
  }

  push(item: number) {
    this.stk.push(item);
    this.mins.push(
      this.mins.length > 0
        ? Math.min(this.mins[this.mins.length - 1], item)
        : item
    );
  }

  pop() {
    if (!this.isEmpty()) {
      this.mins.pop();
      return this.stk.pop();
    } else {
      return -1;
    }
  }

  min() {
    return this.mins.length > 0 ? this.mins[this.mins.length - 1] : Infinity;
  }

  isEmpty() {
    return this.stk.length === 0;
  }
}
