# 94. Binary Tree Inorder Traversal
# https://leetcode.com/problems/binary-tree-inorder-traversal/
# Given the root of a binary tree, return the inorder traversal of its nodes' values.

# Inorder: left -> root -> right


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


# Recursion
class Solution1:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)


# Iteration
class Solution2:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        current = root
        while current or stack:
            if current:
                # if current is not None, store it into stack
                stack.append(current)
                # move to left subtree
                current = current.left
            else:
                # if current is None, get the nearest node from stack
                current = stack.pop()
                # get the value of this node
                result.append(current.val)
                # move to right subtree
                current = current.right
        return result
