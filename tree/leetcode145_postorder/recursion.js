// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Postorder: left -> right -> root

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

var postorderTraversal = function (root) {
  if (!root) return [];
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
};
