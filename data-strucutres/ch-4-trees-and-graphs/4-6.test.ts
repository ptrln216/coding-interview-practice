import { describe, it, expect, beforeEach } from "vitest";
import { findSuccessor, TreeNode } from "./4-6";

describe("findSuccessor", () => {
  let root: TreeNode;
  let node8: TreeNode;
  let node22: TreeNode;
  let node4: TreeNode;
  let node12: TreeNode;
  let node10: TreeNode;
  let node14: TreeNode;

  beforeEach(() => {
    // Create nodes
    root = new TreeNode(20);
    node8 = new TreeNode(8);
    node22 = new TreeNode(22);
    node4 = new TreeNode(4);
    node12 = new TreeNode(12);
    node10 = new TreeNode(10);
    node14 = new TreeNode(14);

    // Build the BST structure
    root.left = node8;
    root.right = node22;
    node8.parent = root;
    node22.parent = root;

    node8.left = node4;
    node8.right = node12;
    node4.parent = node8;
    node12.parent = node8;

    node12.left = node10;
    node12.right = node14;
    node10.parent = node12;
    node14.parent = node12;
  });

  it("should return the in-order successor of a node with a right child", () => {
    const successor = findSuccessor(node8);
    expect(successor?.value).toBe(10); // Successor of node8 is node10
  });

  it("should return the in-order successor of a node without a right child", () => {
    const successor = findSuccessor(node4);
    expect(successor?.value).toBe(8); // Successor of node4 is node8
  });

  it("should return null if the node is the rightmost node", () => {
    const successor = findSuccessor(node22);
    expect(successor).toBeNull(); // node22 has no successor
  });

  it("should return the in-order successor when moving up the tree", () => {
    const successor = findSuccessor(node10);
    expect(successor?.value).toBe(12); // Successor of node10 is node12
  });

  it("should return null for a null input", () => {
    const successor = findSuccessor(null);
    expect(successor).toBeNull(); // Null input should return null
  });
});
