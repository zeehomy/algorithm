// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
 

// 示例 1：

// 输入：s = "()"

// 输出：true

// 示例 2：

// 输入：s = "()[]{}"

// 输出：true

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

// 思路
// 1. 使用栈的思想，将左括号放入，并搭配取出；
// 2. 遍历数组，如果是左括号，则推入栈中(因为左括号会出现在字符串前段)；如果不是，则判断栈顶元素和当前元素是否匹配；
// 3. 如果匹配，则弹出栈顶元素，表示已配对；如果不匹配，则该字符串不是有效的，返回false；
// 4. 遍历完成后，如果栈为空则字符串为有效，返回ture；

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  if (s.length % 2 === 1) {
    return false;
  }

  // 构建匹配键值字典
  const bracketMap = new Map({
    '(': ')',
    '[': ']',
    '{': '}'
  });

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    
    if (bracketMap.has(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const stackTopBracket = stack[stack.length - 1];
      if (currentBracket === bracketMap.get(stackTopBracket)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};