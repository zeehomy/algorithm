/*
 * @Description: 
 * @FilePath: \algorithm\树 tree\1. 104. 二叉树的最大深度.js
 */
// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：3
// 示例 2：

// 输入：root = [1,null,2]
// 输出：2

// 提示：

// 树中节点的数量在 [0, 104] 区间内。
// -100 <= Node.val <= 100

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
 * @return {number}
 */
var maxDepth = function(root) {

  let resultLevel = 0;

  const dfs = (node, level) => {

    if(!node) {
      return;
    }

    if (!node.left && !node.right) {
      resultLevel = Math.max(resultLevel, level);
    }

    if (node.left) {
      dfs(node.left, level + 1);
    }

    if (node.right) {
      dfs(node.right, level + 1);
    }
  };
  dfs(root, 1);
  return resultLevel;
};