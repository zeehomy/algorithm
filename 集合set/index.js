/*
 * @Description: 
 * @FilePath: \algorithm\集合set\index.js
 */
// 去重
const arr = [1, 1, 2, 3];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const isInSet = set.has(3);

// 求交集
const set2 = new Set([2, 3]);
const resultSet = new Set([...set].filter(item => set2.has(item)));
console.log(resultSet);
// 优化: 使用数组原生方法
const result = new Set(arr.filter(item => [2, 3].includes(item)));
