1.  webpack 优化相关

    > 使用更新的 webpack

         1. 缩小构建目标，loader 的 test 配置指定的文件类型，include 指定查找路径，exclude 指定排除路径
         2. babel 的 cacheDirectory，将编译过的文件缓存起来
         3. terser-webpack-plugin，代码压缩
         4. 按需加载，异步导入，配合 react 的 React.lazy,suspense 实现，可减小包体积，优化首屏加载速度
         5. tree shaking，利用es module，静态导入包，静态分析依赖实现
         6. split chunk，提取公共代码，防止代码被重复打包，拆分过大的 js 文件，合并零散的 js 文件
         7. 分离配置，common、prod、dev，不同环境下需要不同的配置
         8. 合理配置 resolve，加快 webpack 搜索文件的速度。
         9. 预先编译资源模块（DllPlugin，第一次编译构建的时候生成一份不变的代码供其他模块引用，下一次构建就可以节约时间
         10. externals，一些 cdn 引入的文件，依然通过`import .. from '..'` 去使用，并且希望 webpack 不去打包，减少打包体积
         11. source-map 的值改为 `eval-source-map`

2.  热更新原理？

    > 参考文章：[webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

3.  什么是 HMR?

    > Hot module Replacement,模块更新，通过 websocket 替换对应模块达到刷新局部的功能，模块更新事件有冒泡机制

4.  webpack 打包流程？

    > webpack 构建的过程是一个串行的过程，从启动到结束会依次执行以下的步骤。

    1. 初始化参数：从配置文件和 shell 语句中读取和合并参数，得到最终的参数。
    2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
    3. 确定入口：根据配置中的 entry 找到所有的入口文件。
    4. 编译模块：从入口出发调用所有配置的 loader 对模块进行编译，再找出该模块依赖的模块，递归此过程直到所有入口依赖的文件都经过 loader 处理。
    5. 完成模块编译：在上一步使用 loader 编译完所有模块后，得到每个模块被编译后的内容以及它们之间的依赖关系。
    6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表。
    7. 输出完成：根据配置确定输出的路径和文件名，把内容写到对应文件。

    > 参考文章：[webpack 打包原理](https://segmentfault.com/a/1190000021494964)

5.  webpack 相关面试题？

    > 参考文章：[再来一打 Webpack 面试题](https://juejin.cn/post/6844904094281236487)

6.  babel 的编译流程？

    > 参考文章：[JS AST 原理揭秘](https://zhaomenghuan.js.org/blog/js-ast-principle-reveals.html)
