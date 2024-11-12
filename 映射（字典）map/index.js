/*
 * @Description: 
 * @FilePath: \algorithm\映射（字典）map\index.js
 */
const map = new Map();

// 增
map.set('a', 'aa');
map.set('b', 'bb');

// 删
map.delete('b');
// map.clear();

// 改
map.set('a', 'aaa');

// 查
map.get('a');  // 'aaa'

// 1. 可用于判断是否存在、是否是某个键（leecode：20）
// 2. 可用于判断是否重复，和去重
map.has('a');

// map适用用于键值对，比如：leecode：146（AI生成）
// map适用于解决键值对匹配的问题。例如：leecode：20