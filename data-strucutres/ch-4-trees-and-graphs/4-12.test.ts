import { describe, expect, test } from "vitest";
import { TreeNode } from "./helpers";
import { pathsWithSum } from "./4-12";

describe("Paths with Sum", () => {
  test("should return the correct count for a basic tree", () => {
    const root = new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
        new TreeNode(2, null, new TreeNode(1))
      ),
      new TreeNode(-3, null, new TreeNode(11))
    );

    expect(pathsWithSum(root, 8)).toBe(3);
  });

  test("should return 0 for an empty tree", () => {
    expect(pathsWithSum(null, 5)).toBe(0);
  });

  test("should return 1 for a single-node tree with a matching value", () => {
    const root = new TreeNode(5);
    expect(pathsWithSum(root, 5)).toBe(1);
  });

  test("should return 0 for a single-node tree with a non-matching value", () => {
    const root = new TreeNode(3);
    expect(pathsWithSum(root, 5)).toBe(0);
  });

  test("should handle negative numbers correctly", () => {
    const root = new TreeNode(
      1,
      new TreeNode(-2, new TreeNode(1, new TreeNode(-1)), new TreeNode(3)),
      new TreeNode(-3, new TreeNode(-2))
    );
    expect(pathsWithSum(root, -1)).toBe(4);
  });

  test("should work for deep nested paths", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
    );
    expect(pathsWithSum(root, 15)).toBe(1);
  });
});
