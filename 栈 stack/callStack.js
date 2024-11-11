/*
 * @Description: 
 * @FilePath: \algorithm\callStack.js
 */
// const f1 = () => {
//   f2();
// };
// const f2 = () => {
//   f3();
// };
// const f3 = () => {
  
// };

// f1();

// 144. 二叉树的前序遍历
var preorderTraversal = function(root) {
  const result = [];
  const stack = [];
  if(root) {
      stack.push(root);
  }
  while(stack) {
      const stackTopNode = stack.pop();
      result.push(stackTopNode.val);
      if(stackTopNode.right) {
          stack.push(stackTopNode.right);
      }
      if(stackTopNode.left) {
          stack.push(stackTopNode.left);
      }
  }
  return result;
};


// 十进制数转位二进制
const tenToTwo = (tenNumber) => {

  let twoNumber = '';
  const stack = [];

  while(tenNumber) {
      stack.push(tenNumber % 2);
      tenNumber = Math.floor(tenNumber / 2);
  }

  while(stack.length) {
      const stackTopNumber = stack.pop();
      twoNumber += stackTopNumber;
  }
  return twoNumber;
};

const result = tenToTwo(123);
console.log(result);