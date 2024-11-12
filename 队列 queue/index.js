/*
 * @Description: 
 * @FilePath: \algorithm\队列 queue\index.js
 */
const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();

// 栈和队列的处理，大部分情况都需要搭配循环。使用while循环是不错的方式
// while循环体中需要对循环条件产生影响，最终使循环结束。
