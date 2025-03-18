export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export function objToTree(obj: any) {
  if (!obj) return null;
  return new TreeNode(obj.value, objToTree(obj.left), objToTree(obj.right));
}
