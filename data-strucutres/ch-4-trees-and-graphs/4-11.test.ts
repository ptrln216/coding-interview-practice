import { describe, it, expect, beforeEach } from "vitest";
import { RandomNodeBinarySearchTree } from "./4-11";

describe("Random Node", () => {
  let tree: RandomNodeBinarySearchTree;

  beforeEach(() => {
    tree = new RandomNodeBinarySearchTree();
    [10, 5, 15, 3, 7, 12, 18, 20].forEach((value) => tree.insert(value));
  });

  it("should insert and find nodes correctly", () => {
    expect(tree.find(10)?.value).toBe(10);
    expect(tree.find(5)?.value).toBe(5);
    expect(tree.find(99)).toBeNull();
  });

  it("should delete nodes correctly", () => {
    tree.delete(5);
    expect(tree.find(5)).toBeNull();
    expect(tree.find(10)?.value).toBe(10);
  });

  it("should get a random node", () => {
    const node = tree.getRandomNode();
    expect(node).not.toBeNull();
    for (let i = 0; i < 1000; ++i) {
      expect([10, 5, 15, 3, 7, 12, 18, 20]).toContain(node?.value);
    }
  });

  it("should handle single-node tree for getRandomNode", () => {
    const singleTree = new RandomNodeBinarySearchTree();
    singleTree.insert(42);
    expect(singleTree.getRandomNode()?.value).toBe(42);
  });

  it("should return null for getRandomNode on empty tree", () => {
    const emptyTree = new RandomNodeBinarySearchTree();
    expect(emptyTree.getRandomNode()).toBeNull();
  });
});
