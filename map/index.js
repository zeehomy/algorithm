/*
 * @Description: 
 * @FilePath: \algorithm\map\index.js
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

// 判断 是否存在
// 可判断是否重复，和去重
map.has('a');

