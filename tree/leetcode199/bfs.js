// 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
// https://leetcode.com/problems/binary-tree-right-side-view/description/

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
var rightSideView = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    console.log("---------start---------");
    console.log("Current queue: ", queue);
    console.log("Current queue size: ", levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      console.log(`i = ${i}`);
      console.log("queue after shift: ", queue);
      console.log("processing node: ", node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      // if current node is the last node of current level
      // add it to the result array
      if (i === levelSize - 1) {
        result.push(node.val);
        console.log("Push the righest node into result: ", result);
      }
    }
    console.log("Next queue: ", queue);
    console.log("Current result:", result);
    console.log("---------end---------");
  }

  return result;
};
