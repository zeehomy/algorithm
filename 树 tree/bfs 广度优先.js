/*
 * @Description: 
 * @FilePath: \algorithm\树 tree\bfs.js
 */
const tree = {
  name: 'a',
  children: [
    {
      name: 'b',
      children: [
        {
          name: 'e'
        },
        {
          name: 'f'
        }
      ]
    },
    {
      name: 'c',
      children: [
        {
          name: 'g',
          children: [
            { name: 'k' },
            { name: 'l' }
          ]
        },
        { name: 'h' }
      ]
    },
    {
      name: 'd',
      children: [
        { name: 'i' },
        {
          name: 'j',
          children: [
            { name: 'm' },
            { name: 'n' }
          ]
        }
      ]
    }
  ]
}

// 1. 新建一个队列，把根节点入队；
// 2. 对头出队并访问；
// 3. 将头节点的children挨个入队；
// 4. 重复2，3，直到队列为空。

const bfs = (root) => {
  const queue = [root];

  // 直到队列为空
  while(queue.length) {

    // 对头出队并访问
    const queueFrontEnd = queue.shift();
    console.log(queueFrontEnd.name);

    // 将头节点的children挨个入队；
    if (queueFrontEnd.children) {
      queueFrontEnd.children.forEach(item => {
        queue.push(item);
      });
    }
  }
};

bfs(tree);