import { describe, it, expect } from "vitest";
import { isBalanced } from "./4-4";

// Test cases for checking if the binary tree is balanced

describe("Check Balanced", () => {
  it("should return true for an empty tree", () => {
    const root = null; // Empty tree
    expect(isBalanced(root)).toBe(true);
  });

  it("should return true for a balanced tree", () => {
    const root = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
    };
    expect(isBalanced(root)).toBe(true);
  });

  it("should return false for a tree where the left subtree is deeper by more than one level", () => {
    const root = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: { value: 8, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    expect(isBalanced(root)).toBe(false);
  });

  it("should return false for a tree where the right subtree is deeper by more than one level", () => {
    const root = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: {
          value: 7,
          left: { value: 8, left: null, right: null },
          right: null,
        },
      },
    };
    expect(isBalanced(root)).toBe(false);
  });

  it("should return true for a single node tree", () => {
    const root = { value: 1, left: null, right: null };
    expect(isBalanced(root)).toBe(true);
  });

  it("should return true for a tree with a balanced root and unbalanced subtrees", () => {
    const root = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: null,
      },
      right: { value: 3, left: null, right: null },
    };
    expect(isBalanced(root)).toBe(true);
  });
});
