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

// Preorder: root -> left -> right
// Here: root -> right -> left

var rightSideView = function (root) {
  const result = [];

  const dfs = function (node, level) {
    console.log("-------------------------------------");
    console.log(
      `Entering dfs with node value: ${
        node ? node.val : "null"
      }, level: ${level}`
    );

    if (!node) return;

    console.log(`Current result array: [${result}]`);
    console.log(
      `Comparing result.length: ${result.length} with level: ${level}`
    );

    // if this is the first node of current level, add it to result array
    if (result.length === level) {
      result.push(node.val);
      console.log(`Added ${node.val} to result array. New result: [${result}]`);
    } else {
      console.log(
        `Skipped adding ${node.val} as it's not the first node of level ${level}`
      );
    }

    // go through right subtree first
    console.log(`Recursing to right child of ${node.val}`);
    dfs(node.right, level + 1);

    console.log(`Recursing to left child of ${node.val}`);
    dfs(node.left, level + 1);

    console.log(`Finished processing node ${node.val}`);
    console.log("-------------------------------------");
  };

  dfs(root, 0);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//       1
//      / \
//     2   3
//      \   \
//       5   4

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

rightSideView(root);
