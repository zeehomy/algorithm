// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 
// 子串
//  的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 思路
// 1. 使用双指针构建“滑动窗口”，剪切子串；
// 2. 遍历字符串（右指针），获取重复字符下标（初次均没有：undefined）；
// 3. 判断如果遇到重复字符（字典中存在，且字典中查找到的索引位于滑动窗口内部），则把左指针移动到重复字符的下一位；
// 4.  计算得到子串长度，取最大值，记为结果；
// 5.  添加当前字符和索引到字典中，供下次使用（如为重复字符，则更新索引值）；

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let leftIndex = 0;
  let resultLength = 0;
  const map = new Map();
  for(let i = 0; i < s.length; i++) {

      const currentChar = s[i];
      const mapIndex = map.get(currentChar);
      // if(map.has(currentChar) && leftIndex <= mapIndex) {
      // 重复字符的下标必须在滑动窗口的里面
      if(map.has(currentChar) && mapIndex >= leftIndex) {
          leftIndex = mapIndex + 1;
      }
      map.set(currentChar, i);
      resultLength = Math.max(resultLength, i - leftIndex + 1);
  }
  return resultLength;
};

// 精简
var lengthOfLongestSubstring = function(s) {

  let leftIndex = 0;
  let resultLength = 0;
  const map = new Map();
  for(let i = 0; i < s.length; i++) {

      const currentChar = s[i];
      const mapIndex = map.get(currentChar);

      map.set(currentChar, i);
      // 重复字符的下标必须在滑动窗口的里面
      if(mapIndex >= leftIndex) {
          leftIndex = mapIndex + 1;
      }
      resultLength = Math.max(resultLength, i - leftIndex + 1);
  }
  return resultLength;
};