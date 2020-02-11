
// https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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
        ? node.left = new Node(data)
        : this.insertNode(node.left, data);
    } else {
      node.right == null
        ? node.right = new Node(data)
        : this.insertNode(node.right, data);
    }
  }

  createFromList(list) {
    for (let i = 0; i < list.length; i++) {
      this.insert(list[i]);
    }
  }
}

const list = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];
const tree1 = new Tree();
tree1.createFromList(list);
console.log(JSON.stringify(tree1, null, 4));
