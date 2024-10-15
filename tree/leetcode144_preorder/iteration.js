// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Preorder: root -> left subtree -> right subtree

// Iterative
// Time complexity: O(n), because go through each node
// Space complexity: O(h), h is the height of the tree // !
var preorderTraversal = function (root) {
  let result = []; // save the result
  let stack = []; //  temporary store the current node
  let current = root;

  // if current is not null or there's still elements in the stack array
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val); // add the value of current node to the result
      stack.push(current); // store current node
      current = current.left; // move to the left subtree
    }
    current = stack.pop(); // once current is null, get the nearest node
    current = current.right; // move to the right subtree
  }
  return result;
};