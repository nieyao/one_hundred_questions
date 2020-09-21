1. 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么?

   > 组件更新时，框架做 diff 算法时可以用 key 标记节点，极大提升 diff 算法的性能，避免更新一些本不需要更新的节点

2. ['1', '2', '3'].map(parseInt) what & why ?

   > [1,NAN,NAN]
