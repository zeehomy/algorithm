/*
 * @Description: 
 * @FilePath: \algorithm\linkedList\index.js
 */
const a = {
  val: 'a'
};
const b = {
  val: 'b'
};
const c = {
  val: 'c'
};
const d = {
  val: 'd'
};
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let cur = a;
while (cur) {
  console.log(cur.val);
  cur = cur.next;
}

// 插入节点
const e = {
  val: 'e'
};
c.next = e;
e.next = d;

// 删除节点e
// 方法1. 将前一个节点的next 指向删除节点的后一个节点
// 方法2. 将删除节点的val变成后一个节点的数值，然后将next指向下一个节点的下一个节点(next.next)
c.next = d;
// 法2
c.next = c.next.next;

// 