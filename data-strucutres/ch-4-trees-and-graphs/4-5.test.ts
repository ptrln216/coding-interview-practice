import { describe, it, expect } from "vitest";
import { checkBST } from "./4-5";
import { objToTree } from "./helpers";

describe("checkBST", () => {
  it("should return true for a valid BST with unique values", () => {
    const tree = {
      value: 10,
      left: { value: 5, left: { value: 2 }, right: { value: 7 } },
      right: { value: 15, left: { value: 12 }, right: { value: 20 } },
    };
    expect(checkBST(objToTree(tree))).toBe(true);
  });

  it("should return true for a BST allowing duplicates on the left", () => {
    const tree = {
      value: 10,
      left: { value: 10, left: { value: 5 } },
      right: { value: 15, left: { value: 12 }, right: { value: 20 } },
    };
    expect(checkBST(objToTree(tree))).toBe(true);
  });

  it("should return false for a BST with duplicate values on the right", () => {
    const tree = {
      value: 10,
      left: { value: 5, left: { value: 2 }, right: { value: 7 } },
      right: { value: 10, left: { value: 12 }, right: { value: 20 } }, // 10 is incorrect
    };
    expect(checkBST(objToTree(tree))).toBe(false);
  });

  it("should return false for a tree violating BST property in left subtree", () => {
    const tree = {
      value: 10,
      left: { value: 5, left: { value: 2 }, right: { value: 12 } }, // 12 is incorrect
      right: { value: 15, left: { value: 13 }, right: { value: 20 } },
    };
    expect(checkBST(objToTree(tree))).toBe(false);
  });

  it("should return false for a tree violating BST property in right subtree", () => {
    const tree = {
      value: 10,
      left: { value: 5, left: { value: 2 }, right: { value: 7 } },
      right: { value: 15, left: { value: 8 }, right: { value: 20 } }, // 8 is incorrect
    };
    expect(checkBST(objToTree(tree))).toBe(false);
  });

  it("should return true for a BST with only one node", () => {
    const tree = { value: 10 };
    expect(checkBST(objToTree(tree))).toBe(true);
  });

  it("should return true for an empty tree", () => {
    expect(checkBST(null)).toBe(true);
  });

  it("should return true for a right-skewed BST", () => {
    const tree = {
      value: 1,
      right: { value: 2, right: { value: 3, right: { value: 4 } } },
    };
    expect(checkBST(objToTree(tree))).toBe(true);
  });

  it("should return true for a left-skewed BST", () => {
    const tree = {
      value: 4,
      left: { value: 3, left: { value: 2, left: { value: 1 } } },
    };
    expect(checkBST(objToTree(tree))).toBe(true);
  });
});
