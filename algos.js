class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) return (this.root = newNode);

    let currentNode = this.root;
    while (true) {
      if (val === currentNode.value) {
        return undefined;
      }
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
      if (val > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(val) {
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const myTree = new BST();
myTree.insert(9);
myTree.insert(10);
myTree.insert(10);
myTree.insert(12);
myTree.insert(7);
myTree.insert(6);
myTree.insert(8);
myTree.insert(22);
myTree.insert(11);
myTree.search(11); //?
myTree; //?
