import { describe, expect, it } from "vitest";
import { TreeNode } from "./helpers";
import { checkSubtree } from "./4-10";

describe("checkSubtree", () => {
  const t1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
  );

  it("should return true when T2 is a subtree of T1", () => {
    const t2 = new TreeNode(2, new TreeNode(4), new TreeNode(5));
    expect(checkSubtree(t1, t2)).toBe(true);
  });

  it("should return false when T2 is not a subtree of T1", () => {
    const t2 = new TreeNode(2, new TreeNode(4), new TreeNode(8));
    expect(checkSubtree(t1, t2)).toBe(false);
  });

  it("should return true when T2 is null", () => {
    expect(checkSubtree(t1, null)).toBe(true);
  });

  it("should return false when T1 is null and T2 is not", () => {
    const t2 = new TreeNode(2);
    expect(checkSubtree(null, t2)).toBe(false);
  });

  it("should return true when T1 and T2 are identical", () => {
    expect(checkSubtree(t1, t1)).toBe(true);
  });
});
