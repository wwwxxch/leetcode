// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Preorder: root -> left subtree -> right subtree

// Recursive
var preorderTraversal = function (root) {
  if (!root) return [];
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
};
