import { describe, expect, test } from "vitest";
import { MinStack } from "./3-2";
import { sortStack, Stack } from "./3-5";

describe(`Sort Stack:`, () => {
  let stack = new Stack();
  let minStack = new MinStack();

  let inputs = [4, 6, 2, 92, 34, 65, 223, 1, 13, 9];

  test("should sort stack, minimal item on the top", () => {
    inputs.forEach((n) => {
      stack.push(n);
      minStack.push(n);
    });
    const sortedStack = sortStack(stack);
    expect(sortedStack.toArray()).toEqual(inputs.sort((a, b) => b - a));
    expect(sortedStack.pop()).toEqual(minStack.min());
  });
});
