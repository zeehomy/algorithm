/*
 * @Description: 
 * @FilePath: \algorithm\stack.js
 */
const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();
const item2 = stack.pop();

console.log(item1);
console.log(item2)

;
// 20. 有效的括号
var isValid = function(s) {
  if(s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    if(currentBracket === '(' || currentBracket === '[' || currentBracket === '{') {
        stack.push(currentBracket);
    } else {
        const stackTopBracket = stack[stack.length - 1];
        // if(stackTopBracket) {
          if(
              stackTopBracket === '(' && currentBracket === ')' ||
              stackTopBracket === '[' && currentBracket === ']' ||
              stackTopBracket === '{' && currentBracket === '}'
          ) {
              stack.pop();   
          } else {
            return false;
          }
        // } else {
        //   return false;
        // }
    }
  }
  return stack.length === 0;
};

const isValidBracket = isValid('()');

console.log('isValidBracket', isValidBracket)