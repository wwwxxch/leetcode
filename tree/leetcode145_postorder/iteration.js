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

// Add console.log
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  let current = root;
  let prev = null;

  console.log("Initial state:");
  console.log("Root:", root.val);
  console.log("--------------------");

  while (current || stack.length > 0) {
    console.log("Current iteration:");
    console.log("Current:", current ? current.val : null);
    console.log("Previous:", prev ? prev.val : null);
    console.log(
      "Stack:",
      stack.map((node) => node.val)
    );
    console.log("Result:", result);

    if (current) {
      console.log("Push to stack and go left");
      stack.push(current);
      current = current.left;
    } else {
      let peekNode = stack[stack.length - 1];
      console.log("Peek node:", peekNode.val);

      if (peekNode.right && prev !== peekNode.right) {
        console.log("Move to right subtree");
        current = peekNode.right;
        console.log("Current:", current.val);
      } else {
        console.log("Add to result and pop from stack");
        result.push(peekNode.val);
        prev = stack.pop();
      }
    }

    console.log("--------------------");
  }

  return result;
};

// ----------------------------------------------------------------------
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  let current = root;
  let prev = null; // use this var to store the last visited node

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current); // if current, add it into stack
      current = current.left; // go through left subtree first
    } else {
      let peekNode = stack[stack.length - 1]; // check the nearest node

      // if this node has right subtree and this node has not been visited
      if (peekNode.right && prev !== peekNode.right) {
        // move to right subtree
        current = peekNode.right;
      } else {
        // else add this node value to result arr
        result.push(peekNode.val);
        // change the last visited node
        prev = stack.pop();
      }
    }
  }
  return result;
};
