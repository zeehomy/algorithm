/*
 * @Description: 
 * @FilePath: \algorithm\linkedList\json.js
 */
// 根据链表，获取JSON节点的值
const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: {
    e: 2
  }
};

// const path = ['a', 'b', 'c'];
const path = ['d', 'e'];

let current = json;
path.forEach((item) => {
  current = current[item];
});

console.log(current);