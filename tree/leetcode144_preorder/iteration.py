# 144. Binary Tree Preorder Traversal
# https://leetcode.com/problems/binary-tree-preorder-traversal/description/
# Given the root of a binary tree, return the preorder traversal of its nodes' values.

# Preorder: root -> left subtree -> right subtree


# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution1(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        stack = []
        current = root

        while stack or current:
            while current:
                result.append(current.val)
                stack.append(current)
                current = current.left

            current = stack.pop()
            current = current.right

        return result
