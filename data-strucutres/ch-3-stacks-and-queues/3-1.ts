/* ------------------------------ Three In One ------------------------------ */

type StackNum = 0 | 1 | 2;
/**
 * StackNum can be [0, 1, 2]
 */
export class ThreeInOneStack {
  private cap: number;
  private stk: number[];

  constructor(statckSize: number) {
    this.stk = Array(statckSize * 3 + 3).fill(0);
    this.cap = statckSize;
  }

  private getSizeIndex = (stackNum: StackNum) => this.cap * 3 + stackNum;
  private getSize = (stackNum: StackNum) =>
    this.stk[this.getSizeIndex(stackNum)];

  push(stackNum: StackNum, value: number) {
    const size = this.getSize(stackNum);

    if (size < this.cap) {
      this.stk[this.cap * stackNum + size] = value;
      this.stk[this.getSizeIndex(stackNum)]++;
    }
  }

  pop(stackNum: StackNum): number {
    const size = this.getSize(stackNum);
    // has content
    if (size > 0) {
      const res = this.stk[this.cap * stackNum + size - 1];
      this.stk[this.getSizeIndex(stackNum)]--;
      return res;
    }
    return -1;
  }

  peek(stackNum: StackNum) {
    const size = this.getSize(stackNum);
    return size > 0 ? this.stk[this.cap * stackNum + size - 1] : -1;
  }

  isEmpty(stackNum: StackNum) {
    return this.getSize(stackNum) === 0;
  }
}
