/*
 * @Description:
 * @FilePath: \algorithm\树 tree\2. 111. 二叉树的最小深度.js
 */
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 示例 1：
// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 示例 2：
// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

// 提示：
// 树中节点数的范围在 [0, 105] 内
// -1000 <= Node.val <= 1000

// 思路：
// 1. 使用广度优先遍历；
// 2. 同时记录每个节点的层级；（将节点数据扩充为包含节点数值和层级的数组）
// 3. 判断为叶子节点时，返回该节点的层级；

// 代码
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [[root, 1]];

  // 直到队列为空
  while (queue.length) {
    // 对头出队并访问
    const [queueFrontEnd, level] = queue.shift();

    if (!queueFrontEnd.left && !queueFrontEnd.right) {
      return level;
    }

    // 将头节点的children挨个入队；
    if (queueFrontEnd.left) {
      queue.push([queueFrontEnd.left, level + 1]);
    }

    if (queueFrontEnd.right) {
      queue.push([queueFrontEnd.right, level + 1]);
    }
  }
};
