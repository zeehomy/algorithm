/*
 * @Description: 
 * @FilePath: \algorithm\linkedList\proto.js
 */
const obj = {};
const func = () => {};
const arr = [];


// 实现instanceOf函数，判断实例是否在构造函数的原型链上
const myInstanceOf = (instance, constructorFunction) => {

  let currentPrototype = instance;

  while (currentPrototype) {
    if(currentPrototype === constructorFunction.prototype) {
      return true;
    }
    currentPrototype = currentPrototype.__proto__;
  }

  return false;
};

// 