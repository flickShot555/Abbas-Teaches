// JavaScript Implementation of a Binary Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(root, key) {
        if (root === null) {
            return new Node(key);
        }
        if (key < root.value) {
            root.left = this.insert(root.left, key);
        } else {
            root.right = this.insert(root.right, key);
        }
        return root;
    }

    inorderTraversal(root) {
        if (root !== null) {
            this.inorderTraversal(root.left);
            process.stdout.write(root.value + " ");
            this.inorderTraversal(root.right);
        }
    }
}

// Example Usage
const tree = new BinaryTree();
tree.root = tree.insert(tree.root, 50);
tree.insert(tree.root, 30);
tree.insert(tree.root, 70);
tree.insert(tree.root, 20);
tree.insert(tree.root, 40);
tree.insert(tree.root, 60);
tree.insert(tree.root, 80);

tree.inorderTraversal(tree.root);
