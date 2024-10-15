# 102. Binary Tree Level Order Traversal
# https://leetcode.com/problems/binary-tree-level-order-traversal/description/
# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []

        result = []
        queue = [root]

        while queue:
            queueLength = len(queue)
            currentLevel = []

            for i in range(queueLength):
                node = queue[0]
                currentLevel.append(node.val)

                queue = queue[1:]

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            result.append(currentLevel)

        return result
