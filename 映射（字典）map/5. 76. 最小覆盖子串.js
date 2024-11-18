// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"
// 解释：整个字符串 s 是最小覆盖子串。

// 示例 3:
// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。

// 思路；
// 滑动窗口
// 思路和算法
// 本问题要求我们返回字符串 s 中包含字符串 t 的全部字符的最小窗口。我们称包含 t 的全部字母的窗口为「可行」窗口。

// 我们可以用滑动窗口的思想解决这个问题。在滑动窗口类型的问题中都会有两个指针，
// 一个用于「延伸」现有窗口的 r 指针，和一个用于「收缩」窗口的 l 指针。在任意时刻，只有一个指针运动，而另一个保持静止。
// 我们在 s 上滑动窗口，通过移动 r 指针不断扩张窗口。当窗口包含 t 全部所需的字符后，如果能收缩，我们就收缩窗口直到得到最小窗口。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
  let leftIndex = 0;
  // let rightIndex = 0;
  const needCharMap = new Map();

  // 生成t的字典
  for(const v of t) {
      needCharMap.set(v, needCharMap.has(v) ? needCharMap.get(v) + 1 : 1);
  }

  let needCharMapSize = needCharMap.size;
  let result = '';

  for(let rightIndex = 0; rightIndex < s.length; rightIndex++) {
      const rightChar = s[rightIndex];

      // 移动右指针寻找符合条件的子串: 字典中所有元素的值都减为0
      // 判断如果是需要的字符，字典值就消耗1
      if(needCharMap.has(rightChar)) {
          needCharMap.set(rightChar, needCharMap.get(rightChar) - 1);
      }

      // 如果字典元素值其中一个减为0，则字典size减小1：表示消耗完一个字母
      if(needCharMap.get(rightChar) === 0) {
          needCharMapSize = needCharMapSize - 1;
      }

      // 满足覆盖子串（needCharMapSize === 0）：右指针移动到当前位置，消耗完所有字符

      // 找到覆盖子串后，使用左指针恢复字典字符数值；
      // 左指针如果匹配到字典字符，则字符对应数值增加1；左移左指针缩小长度
      while(needCharMapSize === 0) {

          // 在缩小的过程中输出结果
          const currentResult = s.substring(leftIndex, rightIndex + 1);
          if(!result || currentResult.length < result.length) {
              result = currentResult;
          }

          const currentLeftChar = s[leftIndex];
          // 判断当前位置是否为所需字典字符。如果是，则字符对应数值增加1（用于右指针消耗）
          if(needCharMap.has(currentLeftChar)) {
              needCharMap.set(currentLeftChar, needCharMap.get(currentLeftChar) + 1)
          }
          // 同时如果字符值从0加到1，needCharMapSize加1
          if(needCharMap.get(currentLeftChar) === 1) {
              needCharMapSize = needCharMapSize + 1;
          }

          leftIndex = leftIndex + 1;
      }
  }

  return result;
};