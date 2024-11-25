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