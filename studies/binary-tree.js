// https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/


// A full binary tree.is a binary tree in which each node has exactly zero or two children.

// A complete binary tree is a binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from left to right.

class Node {
  constructor() {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.depth = 0;
    this.height = 0;
  }
}

class Tree {
  constructor() {
    this.length = 0;
    this.root = null;
    this.heigth = 0;
  }


}