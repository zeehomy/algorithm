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

// 深度优先遍历
// const dfs = (node, fn) => {
//   fn(node)
//   node.children && node.children.forEach(child => dfs(child, fn))
// }

// 1. 访问根节点；
// 2. 遍历根节点的children, 依次进行深度优先遍历；
const dfs = (root) => {
  console.log(root.name);
  root.children && root.children.forEach(dfs);
};

dfs(tree);