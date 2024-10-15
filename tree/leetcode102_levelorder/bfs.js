// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length; // get the node number of curent level
    let currentLevel = []; // store the node value of current level

    console.log("--- Start of new level ---");
    console.log("Current queue:", queue);

    for (let i = 0; i < levelSize; i++) {
      console.log(`i = ${i}`);

      let node = queue.shift(); // remove the first element and return the first element
      console.log("Processing node:", node.val);

      currentLevel.push(node.val); // add the node value to current level
      console.log("currentLevel in for loop: ", currentLevel);

      if (node.left) {
        queue.push(node.left); // add left subtree & right subtree to the queue
        console.log("Left child added:", node.left);
      }
      if (node.right) {
        queue.push(node.right);
        console.log("Right child added:", node.right);
      }

      console.log("queue in for loop: ", queue);
    }

    result.push(currentLevel); // push current level arr to the result
    console.log("Current level result:", currentLevel);
    console.log("--- End of level ---");
  }

  console.log("Final result:", result);
  return result;
};
// ---------------------------------------------------------------------------------------------------
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    // record the number of nodes for current level
    let levelSize = queue.length; // this one should be assigned!!!!!
    // store the value of nodes in current level
    let currentLevel = [];

    // go through all nodes in current level
    for (let i = 0; i < levelSize; i++) {
      // levelSize cannot be changed to queue.length

      // get the first node from queue
      let node = queue.shift();
      // add the value of nodes in current level
      currentLevel.push(node.val);

      // add child nodes to queue, for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // add current level into the result array, then go to next level (queue.length > 0)
    result.push(currentLevel);
  }

  return result;
};
