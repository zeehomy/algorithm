const binaryTree = require('./binaryTree');
console.log('binaryTree', binaryTree);

// 1. 访问根节点；
// 2. 对左子树递归进行前序遍历；
// 3. 对右子树递归进行前序遍历。

// 先序遍历
const preorder = (root) => {
  console.log(root.value);
  if (root.left) {
    preorder(root.left);
  }
  if (root.right) {
    preorder(root.right);
  }
};

preorder(binaryTree);