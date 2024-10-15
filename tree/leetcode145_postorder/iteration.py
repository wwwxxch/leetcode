# 145. Binary Tree Postorder Traversal
# https://leetcode.com/problems/binary-tree-postorder-traversal/description/
# Given the root of a binary tree, return the postorder traversal of its nodes' values.

# Postorder: left -> right -> root


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        result = []
        stack = []
        current = root
        prev = None

        while current or stack:
            if current:
                stack.append(current)
                current = current.left
            else:
                peekNode = stack[-1]
                if peekNode.right and prev != peekNode.right:
                    current = peekNode.right
                else:
                    result.append(peekNode.val)
                    prev = stack.pop()

        return result
