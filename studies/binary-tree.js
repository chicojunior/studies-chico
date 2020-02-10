// https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  create(list) {

    for (let i = 0; i < list.length; i++) {
      const node = new Node(list[i]);
      let current;

      if (this.root == null) {
        this.root = node;
      } else {
        current = this.root;
        while(true) {
          if (list[i] < current.data) {
            if (current.left) {
              current = current.left;
            } else {
              current.left = node;
              break;
            }
          } else {
            if (current.right) {
              current = current.right;
            } else {
              current.right = node;
              break;
            }
          }
        }
      }
    }
    return this;
  }


}

const list = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];
const tree1 = new Tree();
tree1.create(list);
console.log(JSON.stringify(tree1, null, 4));