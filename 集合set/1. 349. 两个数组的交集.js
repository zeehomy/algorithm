/*
 * @Description: 
 * @FilePath: \algorithm\集合set\1. 349. 两个数组的交集.js
 */
// 给定两个数组 nums1 和 nums2 ，返回 它们的 
// 交集
//  。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的

// 思路：
// 方法1：使用Set
// 1. 先使用set去重；
// 2. 再用数组过滤，判断数组2中是否包含每项；

// 方法2：使用Map
// 1. 遍历数组1建立Map；标记true；
// 2. 遍历数组2，检查Map，如果在Map中获取到，则为交集元素，并移除字典；
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

  // 方法一：使用Set
  // return [...new Set(nums1)].filter(item => new Set(nums2).has(item));

  // 优化 使用数组原生方法
  return [...new Set(nums1)].filter(item => nums2.includes(item));

  // 方法二：使用Map

  const map = new Map();
  const result = [];
  nums1.forEach((nums1Item) => {
      map.set(nums1Item, true);
  });

  nums2.forEach((nums2Item) => {
      if(map.get(nums2Item)) {
          result.push(nums2Item);
          map.delete(nums2Item);
      }
  });

  return result;
};