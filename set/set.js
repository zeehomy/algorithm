/*
 * @Description: 
 * @FilePath: \algorithm\set\set.js
 */
let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('some text');

const obj = {
  a: 1,
  b: 2
};
mySet.add(obj);
mySet.add({
  a: 1,
  b: 2
});

const isHasO = mySet.has(obj);
mySet.delete(5);

for (const item of mySet.entries()) {
  console.log(item);
}

const arrFromSet = Array.from(mySet);
const setFromArr = new Set([1, 2, 3]);

// 交集
const intersection = new Set([...mySet].filter(item => setFromArr.has(item)));

// 差集
const difference = new Set([...mySet].filter(item => !setFromArr.has(item)));

