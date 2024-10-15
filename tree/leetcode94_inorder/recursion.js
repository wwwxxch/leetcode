// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Inorder: left -> root -> right

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
};
