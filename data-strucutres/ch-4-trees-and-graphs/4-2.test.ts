import { describe, it, expect } from "vitest";
import { TreeNode } from "./helpers";
import { isBalanced } from "./4-2.utils";
import * as funcs from "./4-2";

for (let key in funcs) {
  const func = funcs[key];

  describe(`Minimal Tree: ${key}`, () => {
    // Test Case 1: Empty array
    it("should handle an empty array", () => {
      const root = func([]);
      expect(root).toBeNull();
    });

    // Test Case 2: Array with one element
    it("should create a tree with one element", () => {
      const root = func([10]);
      expect(root?.value).toBe(10);
      expect(root?.left).toBeNull();
      expect(root?.right).toBeNull();
    });

    // Test Case 3: Array with multiple elements
    it("should create a balanced tree for a sorted array", () => {
      const root = func([1, 2, 3, 4, 5, 6, 7]);
      // Check if the tree is balanced
      expect(isBalanced(root)).toBe(true);
      // Check if the root is the middle element
      expect(root?.value).toBe(4);
    });

    // Test Case 4: Array with odd number of elements
    it("should create a balanced tree for an odd-length sorted array", () => {
      const root = func([1, 2, 3, 4, 5]);
      // Check if the tree is balanced
      expect(isBalanced(root)).toBe(true);
      // Check if the root is the middle element
      expect(root?.value).toBe(3);
    });

    // Test Case 5: Array with even number of elements
    it("should create a balanced tree for an even-length sorted array", () => {
      const root: TreeNode = func([1, 2, 3, 4, 5, 6]);
      // Check if the tree is balanced
      expect(isBalanced(root)).toBe(true);
      // Check if the root is the middle element
      expect(root?.value).toBe(3);
    });

    // Test Case 6: Larger array
    it("should create a balanced tree for a larger sorted array", () => {
      const root: TreeNode = func([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      // Check if the tree is balanced
      expect(isBalanced(root)).toBe(true);
      // Check if the root is the middle element
      expect(root?.value).toBe(8);
    });
  });
}
