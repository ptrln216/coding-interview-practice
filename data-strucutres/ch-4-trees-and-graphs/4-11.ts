/* ------------------------------- Random Node ------------------------------ */

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  children: number = 0;

  constructor(value: number) {
    this.value = value;
  }
}

export class RandomNodeBinarySearchTree {
  root: TreeNode | null;

  insert(value: number) {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: TreeNode | null, value: number) {
    if (!node) return new TreeNode(value);

    if (value <= node.value) {
      node.left = this._insert(node.left, value);
    } else {
      node.right = this._insert(node.right, value);
    }
    node.children++;
    return node;
  }

  find(value: number) {
    return this._find(this.root, value);
  }

  private _find(node: TreeNode | null, value: number) {
    if (!node) return null;
    if (node.value === value) return node;
    else if (value < node.value) return this._find(node.left, value);
    return this._find(node.right, value);
  }

  delete(value: number) {
    this.root = this._delete(this.root, value);
  }

  private _delete(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      // delete leaf node or node with 1 child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // delete node with 2 children
      const minLargerValue = this._getMinValue(node.right);
      node.value = minLargerValue;
      node.right = this._delete(node.right, minLargerValue);
    }
    node.children--;
    return node;
  }

  private _getMinValue(node: TreeNode): number {
    while (node.left) node = node.left;
    return node.value;
  }

  getRandomNode() {
    if (!this.root) return null;
    const randomIndex = Math.floor(Math.random() * (this.root.children + 1));
    return this._getRandomNode(this.root, randomIndex);
  }

  private _getRandomNode(node: TreeNode, index: number) {
    const leftSize = this._size(node.left);

    if (index === leftSize) return node;
    else if (index < leftSize) return this._getRandomNode(node.left!, index);
    return this._getRandomNode(node.right!, index - leftSize - 1);
  }

  private _size(node: TreeNode | null) {
    return node ? node.children + 1 : 0;
  }
}
