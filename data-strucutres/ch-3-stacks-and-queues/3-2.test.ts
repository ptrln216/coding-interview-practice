import { beforeAll, describe, expect, test } from "vitest";
import { MinStack } from "./3-2";

describe("Stack Min", () => {
  let minStack = new MinStack();

  test("should be able to push and pop item", () => {
    minStack.push(1);
    expect(minStack.pop()).toBe(1);
  });

  test("should return -1 when trying to pop an empty stack", () => {
    expect(minStack.pop()).toBe(-1);
  });

  test("should be able to return the min item in between push and pops", () => {
    minStack.push(120);
    minStack.push(429);
    minStack.push(9);
    minStack.push(4);
    expect(minStack.min()).toBe(4);
    minStack.pop();
    expect(minStack.min()).toBe(9);
    minStack.pop();
    expect(minStack.min()).toBe(120);
  });

  test("should return true for empty stack", () => {
    minStack.pop();
    minStack.pop();
    expect(minStack.isEmpty()).toBeTruthy();
  });
});
