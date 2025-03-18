import { describe, expect, test } from "vitest";
import { firstCommonAncestor } from "./4-8";
import { TreeNode } from "./helpers";

describe("firstCommonAncestor", () => {
  // 建立測試用的二元樹
  /**
   *         3
   *       /   \
   *      5     1
   *     / \   / \
   *    6   2 0   8
   *       / \
   *      7   4
   */
  const root = new TreeNode(
    3,
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(2, new TreeNode(7), new TreeNode(4))
    ),
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
  );

  const node5 = root.left!;
  const node1 = root.right!;
  const node6 = node5.left!;
  const node2 = node5.right!;
  const node0 = node1.left!;
  const node8 = node1.right!;
  const node7 = node2.left!;
  const node4 = node2.right!;

  test("p and q are in different subtrees", () => {
    expect(firstCommonAncestor(root, node5, node1)?.value).toBe(3);
  });

  test("p is ancestor of q", () => {
    expect(firstCommonAncestor(root, node5, node4)?.value).toBe(5);
  });

  test("p and q are on the same side of the tree", () => {
    expect(firstCommonAncestor(root, node6, node4)?.value).toBe(5);
  });

  test("p and q are the same node", () => {
    expect(firstCommonAncestor(root, node2, node2)?.value).toBe(2);
  });

  test("one node does not exist in the tree", () => {
    const node100 = new TreeNode(100);
    expect(firstCommonAncestor(root, node5, node100)).toBe(node5);
  });

  test("both nodes do not exist in the tree", () => {
    const node100 = new TreeNode(100);
    const node200 = new TreeNode(200);
    expect(firstCommonAncestor(root, node100, node200)).toBeNull();
  });

  test("root is one of the nodes", () => {
    expect(firstCommonAncestor(root, root, node4)?.value).toBe(3);
  });

  test("p and q are leaf nodes in different subtrees", () => {
    expect(firstCommonAncestor(root, node0, node8)?.value).toBe(1);
  });

  test("p is the root and q is deep in the tree", () => {
    expect(firstCommonAncestor(root, root, node7)?.value).toBe(3);
  });
});
