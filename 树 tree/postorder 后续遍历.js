/*
 * @Description: 后序遍历
 * @FilePath: \algorithm\树 tree\postorder 后续遍历.js
 */
const binaryTree = require('./binaryTree');

// 后序遍历: 左右根
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

// postorder(binaryTree);    // 4, 5, 2, 6, 7, 3, 1

// 非递归版
// 1. 按照“根右左”的顺序遍历；
// 2. 将遍历的结果进行反转并输出；
const postorderByStack = (root) => {

  const result = [];
  const stack = [root];

  while (stack.length) {
    
    // 弹出栈顶元素（访问一个节点）
    const stackTop = stack.pop();
    result.push(stackTop);

    if (stackTop.left) {
      stack.push(stackTop.left);
    }

    if (stackTop.right) {
      stack.push(stackTop.right);
    }
  }

  // 反转数组
  // result.reverse();
  // // 输出数组
  // result.forEach((item) => {
  //   console.log(item.value);
  // });

  // 反转方法二：使用pop方法可以反向输出数组
  while (result.length) {
    const resultPop = result.pop();
    console.log(resultPop.value);
  }
};

postorderByStack(binaryTree);     // 4, 5, 2, 6, 7, 3, 1