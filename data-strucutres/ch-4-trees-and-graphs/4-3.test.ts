import { describe, it, expect } from "vitest";
import { TreeNode } from "./helpers";
import * as funcs from "./4-3";

for (let key in funcs) {
  let func = funcs[key];

  // Test case 1: Simple binary tree
  describe("List of Depths - Simple Tree", () => {
    it("should create arrays of node values at each depth", () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);

      const result = func(root);

      expect(result.size).toBe(3); // There are 3 depths (levels)
      expect(result.get(1)).toEqual([1]); // Level 1: 1
      expect(result.get(2)).toEqual([2, 3]); // Level 2: 2, 3
      expect(result.get(3)).toEqual([4, 5, 6]); // Level 3: 4, 5, 6
    });
  });

  // Test case 2: Tree with only one node
  describe("List of Depths - Single Node Tree", () => {
    it("should create an array with one node value", () => {
      const root = new TreeNode(1);

      const result = func(root);

      expect(result.size).toBe(1); // Only one depth
      expect(result.get(1)).toEqual([1]); // Only one node at level 1
    });
  });

  // Test case 3: Tree with no nodes (empty tree)
  describe("List of Depths - Empty Tree", () => {
    it("should return an empty map", () => {
      const root = null;

      const result = func(root);

      expect(result.size).toBe(0); // No depths in an empty tree
    });
  });

  // Test case 4: Tree with only left children
  describe("List of Depths - Only Left Children", () => {
    it("should create arrays with node values in a single chain", () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.left.left = new TreeNode(3);
      root.left.left.left = new TreeNode(4);

      const result = func(root);

      expect(result.size).toBe(4); // There are 4 depths (levels)
      expect(result.get(1)).toEqual([1]); // Level 1: 1
      expect(result.get(2)).toEqual([2]); // Level 2: 2
      expect(result.get(3)).toEqual([3]); // Level 3: 3
      expect(result.get(4)).toEqual([4]); // Level 4: 4
    });
  });

  // Test case 5: Tree with all right children
  describe("List of Depths - Only Right Children", () => {
    it("should create arrays with node values in a single chain", () => {
      const root = new TreeNode(1);
      root.right = new TreeNode(2);
      root.right.right = new TreeNode(3);
      root.right.right.right = new TreeNode(4);

      const result = func(root);

      expect(result.size).toBe(4); // There are 4 depths (levels)
      expect(result.get(1)).toEqual([1]); // Level 1: 1
      expect(result.get(2)).toEqual([2]); // Level 2: 2
      expect(result.get(3)).toEqual([3]); // Level 3: 3
      expect(result.get(4)).toEqual([4]); // Level 4: 4
    });
  });

  // Test case 6: Tree with multiple branches at each depth
  describe("List of Depths - Multi-Branch Tree", () => {
    it("should create arrays with node values at each depth", () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);

      const result = func(root);

      expect(result.size).toBe(3); // There are 3 depths (levels)
      expect(result.get(1)).toEqual([1]); // Level 1: 1
      expect(result.get(2)).toEqual([2, 3]); // Level 2: 2, 3
      expect(result.get(3)).toEqual([4, 5, 6, 7]); // Level 3: 4, 5, 6, 7
    });
  });
}
