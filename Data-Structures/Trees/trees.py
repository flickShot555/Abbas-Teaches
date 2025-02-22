# Python Implementation of a Binary Tree

class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert(self, root, key):
        if root is None:
            return Node(key)
        if key < root.value:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)
        return root
    
    def inorder_traversal(self, root):
        if root:
            self.inorder_traversal(root.left)
            print(root.value, end=" ")
            self.inorder_traversal(root.right)

# Example Usage
tree = BinaryTree()
tree.root = tree.insert(tree.root, 50)
tree.insert(tree.root, 30)
tree.insert(tree.root, 70)
tree.insert(tree.root, 20)
tree.insert(tree.root, 40)
tree.insert(tree.root, 60)
tree.insert(tree.root, 80)

tree.inorder_traversal(tree.root)
