/*
 * @Description: 中序遍历
 * @FilePath: \algorithm\树 tree\inorder 中序遍历.js
 */
const binaryTree = require('./binaryTree');

// 中序遍历 : 左根右
// 1. 对根节点的左子树进行中序遍历；
// 2. 访问根节点；
// 3. 对根节点的右子树进行中序遍历；

const inorder = (root) => {
  if (root.left) {
    inorder(root.left);
  }
  console.log(root.value);
  if (root.right) {
    inorder(root.right);
  }
};

inorder(binaryTree);

// 非递归版
const inorderNoRecursion = (root) => {
  
  const p = root;
  while(p.left) {

    p = p.left;

  }

};

// const stack = [];
//   let p = root;
//   while (stack.length || p) {
//     while (p) {
//       stack.push(p);
//       p = p.left;
//     }
//     const n = stack.pop();
//     console.log(n.value);
//     p = n.right;
//   }