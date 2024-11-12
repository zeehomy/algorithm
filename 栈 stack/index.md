1. while循环往往用于不定次数的条件执行（判断条件动态）。即达到目标条件就终止，但我们事先并不知道达到这个目标条件需要进行多少次执行。例如：
``` js
    let numArr = []
    let i = 1
    while (numArr.length < 10) {
      if (i % 3 === 0 || i % 5 === ) {
        numArr.push(i)
      }
      i++
    }
```

2. while在某些场景下，可以代替递归函数.例如：
```js
    // 使用递归
    function fib (prev = 0, next = 1) {
      if (next < 100) {
        return [next, ...fib(next, prev + next)]
      }
      return []
    }
    ​
    // 使用while
    functon fib2 (n = 100) {
      let prev = 0
      let next = 1
      let result = []
      while (next < n) {
        result.push(next)
        const temp = prev
        prev = next
        next = next + temp
      }
      return result
    }
```
- 递归本质上是一个N层的函数嵌套，所以直觉上不易理解，且耗性能（不考虑尾递归优化的前提下）；while循环只有一层嵌套，所以直觉上更容易理解，且性能更优。这里并不是说递归不好，不推荐大家使用，一来性能并不是大家首先要考虑的问题，二来while只能在部分场景中来代替递归。
[链接：https://juejin.cn/post/7404778998632890387]