import { beforeEach, describe, expect, test } from "vitest";
import { SetOfStacks } from "./3-3";

describe("Stack of Plates", () => {
  let stacks: SetOfStacks;

  beforeEach(() => {
    stacks = new SetOfStacks();
  });

  test("should be able to push 100 items, and pop them in order", () => {
    for (let i = 0; i < 100; ++i) {
      stacks.push(i + 1);
    }
    for (let i = 100; i > 0; --i) {
      expect(stacks.pop()).toEqual(i);
    }
  });

  test("should return -1 when trying to pop an empty stack", () => {
    expect(stacks.pop()).toBe(-1);
  });

  test("should return true if stack is empty", () => {
    expect(stacks.isEmpty()).toBeTruthy();
  });

  test("should be able to peek the top item", () => {
    for (let i = 0; i < 100; ++i) {
      stacks.push(i + 1);
    }
    expect(stacks.peek()).toBe(100);
    stacks.pop();
    expect(stacks.peek()).toBe(99);
  });

  test("should return -1 when trying to peek an empty stack", () => {
    expect(stacks.peek()).toBe(-1);
  });

  test("should be able to pop specific stack by index", () => {
    for (let i = 0; i < 100; ++i) {
      stacks.push(i + 1);
    }
    expect(stacks.popAt(9)).toBe(50);
    expect(stacks.pop()).toBe(100);
    expect(stacks.popAt(9)).toBe(49);
    expect(stacks.popAt(9)).toBe(48);
    expect(stacks.popAt(9)).toBe(47);
    expect(stacks.popAt(9)).toBe(46);
    expect(stacks.popAt(9)).toBe(55);
    expect(stacks.pop()).toBe(99);
  });
});
