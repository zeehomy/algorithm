/*
 * @Description: 中序遍历
 * @FilePath: \algorithm\树 tree\inorder中序遍历.js
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

// inorder(binaryTree);            // 4，2，5，1，6，3，7

// 非递归版(使用栈)
const inorderNoRecursion = (root) => {
  
  // 定义指针
  let currentNodePointer = root;
  const stack = [];

  while(stack.length || currentNodePointer) {
    
    // 如果当前指针节点存在，将指针节点 和 指针节点的左子树入栈（左节点可能为左根节点或左子节点）
    while (currentNodePointer) {     // 类似链表遍历    // while具有if的功能
    
      stack.push(currentNodePointer);
      
      currentNodePointer = currentNodePointer.left;
    }

    console.log('stack', stack);

    // 访问栈顶元素
    const stackTopNode = stack.pop();

    console.log('stackTopNode', stackTopNode);
    console.log(stackTopNode.value);
  
    // 指针指向栈顶元素的右子树
    currentNodePointer = stackTopNode.right;
  }
};
console.log('非递归版');
inorderNoRecursion(binaryTree);      // 4，2，5，1，6，3，7