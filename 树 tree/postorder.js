const binaryTree = require('./binaryTree');

// 后序遍历
// 1. 对根节点的左子树进行后序遍历；
// 2. 对根节点的右子树进行后序遍历；
// 3. 访问根节点；

const postorder  = (root) => {
  if (root.left) {
    postorder(root.left);
  }
  if (root.right) {
    postorder(root.right);
  }
  console.log(root.value);
};

postorder(binaryTree);