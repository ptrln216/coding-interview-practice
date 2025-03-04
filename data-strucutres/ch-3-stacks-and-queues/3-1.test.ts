import { beforeEach, describe, expect, test } from "vitest";
import { ThreeInOneStack } from "./3-1";

describe("Three in One", () => {
  let stack: ThreeInOneStack;

  beforeEach(() => {
    stack = new ThreeInOneStack(3);
  });

  test("should be able to push items to all three stacks", () => {
    stack.push(0, 1);
    stack.push(1, 1);
    stack.push(2, 1);
    expect(stack.peek(0)).toBe(1);
    expect(stack.peek(1)).toBe(1);
    expect(stack.peek(2)).toBe(1);
  });

  test("should not be able to push items when stack is full", () => {
    stack.push(0, 1);
    stack.push(0, 1);
    stack.push(0, 1);
    stack.push(0, 2);
    expect(stack.peek(0)).toBe(1);
  });

  test("should be able to pop items from all three statcks", () => {
    stack.push(0, 1);
    stack.push(1, 1);
    stack.push(2, 1);
    expect(stack.pop(0)).toBe(1);
    expect(stack.pop(1)).toBe(1);
    expect(stack.pop(2)).toBe(1);
  });

  test("should return -1 when trying to pop an empty stack", () => {
    expect(stack.pop(0)).toBe(-1);
  });

  test("should return -1 when trying to peek an empty stack", () => {
    expect(stack.peek(1)).toBe(-1);
  });

  test("should return true for empty stack", () => {
    stack.push(0, 1);
    expect(stack.isEmpty(0)).toBeFalsy();
    expect(stack.isEmpty(1)).toBeTruthy();
  });
});
