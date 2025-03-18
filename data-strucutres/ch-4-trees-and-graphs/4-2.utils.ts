import { TreeNode } from "./helpers";

export const isBalanced = (root: TreeNode | null): boolean => {
  const height = (node: TreeNode | null): number => {
    if (!node) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1; // means unbalanced
    }

    return Math.max(leftHeight, rightHeight) + 1;
  };

  return height(root) !== -1;
};
