import { describe, it, expect } from "vitest";
import { TreeNode } from "./helpers";
import { bstSequences } from "./4-9";

describe("BST Sequences", () => {
  const createBST = (values: number[]): TreeNode | null => {
    if (!values.length) return null;

    const root = new TreeNode(values[0]);
    for (let i = 1; i < values.length; ++i) {
      insert(root, values[i]);
    }
    return root;
  };

  const insert = (node: TreeNode | null, value: number) => {
    if (!node) return;

    if (value <= node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        insert(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
      } else {
        insert(node.right, value);
      }
    }
  };

  it("handles single node", () => {
    const root = createBST([5]);
    const result = bstSequences(root);
    expect(result).toEqual([[5]]);
  });

  it("handles balanced BST", () => {
    const root = createBST([2, 1, 3]);
    const result = bstSequences(root);
    expect(result).toEqual([
      [2, 1, 3],
      [2, 3, 1],
    ]);
  });

  it("handles complex BST", () => {
    const root = createBST([3, 1, 4, 0, 2]);
    const result = bstSequences(root);
    expect(result).toContainEqual([3, 1, 0, 2, 4]);
    expect(result).toContainEqual([3, 1, 0, 4, 2]);
    expect(result).toContainEqual([3, 1, 4, 0, 2]);
    expect(result).toContainEqual([3, 1, 2, 0, 4]);
    expect(result).toContainEqual([3, 1, 2, 4, 0]);
    expect(result).toContainEqual([3, 1, 4, 2, 0]);
    expect(result).toContainEqual([3, 4, 1, 0, 2]);
    expect(result).toContainEqual([3, 4, 1, 2, 0]);
    expect(result.length).toBe(8);
  });

  it("handles empty tree", () => {
    const result = bstSequences(null);
    expect(result).toEqual([[]]);
  });
});
