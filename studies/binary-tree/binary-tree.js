const Node = require('./binary-tree-node');
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root == null) {
      this.root = new Node(data);
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node, data) {
    if (data < node.data) {
      node.left == null
        ? (node.left = new Node(data))
        : this.insertNode(node.left, data);
    } else {
      node.right == null
        ? (node.right = new Node(data))
        : this.insertNode(node.right, data);
    }
  }

  createFromList(list) {
    for (let i = 0; i < list.length; i++) {
      this.insert(list[i]);
    }
  }

  createLevelOrder(list = [], root = this.root, index = 0) {
    if (index < list.length) {
      root = new Node(list[index]);

      if (this.root == null) {
        this.root = root;
      }

      root.left = this.createLevelOrder(list, root.left, 2 * index + 1);
      root.right = this.createLevelOrder(list, root.right, 2 * index + 2);
    }
    return root;
  }

  traverse(root) {
    if (root != null) {
      this.traverse(root.left);
      console.log(root.data + ' ');
      this.traverse(root.right);
    }
  }
}

module.exports = BinaryTree;
