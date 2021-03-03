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

3.  什么是 HMR?

    > Hot module Replacement,模块更新，通过 websocket 替换对应模块达到刷新局部的功能，模块更新事件有冒泡机制

4.  webpack 打包流程？
