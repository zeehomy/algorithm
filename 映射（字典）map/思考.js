// 使用chrome的profile，对Map和Object进行频繁增删属性的操作，查看谁的性能更好。
const obj = {}
console.time('obj')
for (let i = 0; i < 1000000; i++) {
  obj[i] = i;
  delete obj[i];
}
console.timeEnd('obj')
console.log('--------------------');
const map = new Map();
console.time('map')
for (let i = 0; i < 1000000; i++) {
  map.set(i, i);
  map.delete(i);
}
console.timeEnd('map')

// 输出：
// obj: 451.5029296875 ms
// --------------------
// map: 160.945068359375 ms
// 结论：map性能更好，因为map的键值对是存储在数组中，而object的键值对是存储在属性中。

// 但当不做删除操作时，object性能更好。
// 使用Map
const userMap = new Map();

function addUserMap(id, data) {
  userMap.set(id, data);
}

function removeUserMap(id) {
  userMap.delete(id);
}

// 使用Object
const userObj = {};

function addUserObj(id, data) {
  userObj[id] = data;
}

function removeUserObj(id) {
  delete userObj[id];
}

// 测试性能
const iterations = 100000;
const startTime = performance.now();

for (let i = 0; i < iterations; i++) {
  addUserMap(i, { name: 'User' + i });
  // removeUserMap(i);
}

const mapTime = performance.now() - startTime;

for (let i = 0; i < iterations; i++) {
  addUserObj(i, { name: 'User' + i });
  // removeUserObj(i);
}

const objTime = performance.now() - mapTime - startTime;

console.log(`Map operations took ${mapTime} milliseconds`);
console.log(`Object operations took ${objTime} milliseconds`);

// Map operations took 1126.7999999523163 milliseconds
// Object operations took 870.7000000476837 milliseconds