/*
 * @Description: 先序遍历
 * @FilePath: \algorithm\树 tree\preorder 先序遍历.js
 */
const binaryTree = require('./binaryTree');
console.log('binaryTree', binaryTree);

// 1. 访问根节点；
// 2. 对左子树递归进行前序遍历；
// 3. 对右子树递归进行前序遍历。

// 先序遍历: 根左右
const preorder = (root) => {
  console.log(root.value);
  if (root.left) {
    preorder(root.left);
  }
  if (root.right) {
    preorder(root.right);
  }
};

// console.log('递归：');
// preorder(binaryTree);     // 1，2，4，5，3，6，7

// 非递归版,使用函数调用栈
// 不用使用队列。使用队列，会使得左子树还没有遍历完，就先遍历了右子树。
const errorPreorderNoRecursion = (root) => {
  
  const stack = [root];

  while (stack.length) {
    
    // 弹出队列头元素
    const  queueFront = stack.shift();
    console.log(queueFront.value);
  
    if (queueFront.left) {
      stack.push(queueFront.left);
    }
  
    if (queueFront.right) {
      stack.push(queueFront.right);
    }
  }
};

// console.log('非递归');
// errorPreorderNoRecursion(binaryTree);    // 1, 2, 3, 4, 5, 6, 7

// 正确：
const preorderNoRecursion = (root) => {
  
  const stack = [root];
  while (stack.length) {
    
    // 弹出栈顶元素
    const stackTop = stack.pop();
    console.log(stackTop.value);

    // 为了模拟调用栈，需要将右子树先入栈，再入栈左子树
    if (stackTop.right) {
      stack.push(stackTop.right);
    }

    if (stackTop.left) {
      stack.push(stackTop.left);
    }
  }
}

console.log('非递归');
preorderNoRecursion(binaryTree);    //  1，2，4，5，3，6，7