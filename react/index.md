1. react-hooks 能否取代 redux?

   > 不存在替代关系。
   >
   > 1. redux 一直都是一个可选项
   > 2. react-hooks 并不是用来代替 redux 的，两者要解决的问题从根本就不同。redux 是一个状态管理库，是用来解决状态管理的；而 hooks 被开发出来主要是解决三个问题：类组件的逻辑难以复用；生命周期中经常包含莫名其妙的不相关逻辑；类组件难以被机器和人理解
   > 3. react-redux 有自己的 hooks，两者之间不存在孰优孰劣，替代的关系,hooks 可以帮助 reudx 减少样板代码

2. redux 中间件？

   > redux 中间件就是一个函数，对 store.dispatch 方法进行改造，在发出 action 和执行 reducer 之间添加了其他功能
