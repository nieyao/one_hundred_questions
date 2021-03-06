1. 如何在页面上画一个三角形？

> 关键是利用 border 属性，设置一个宽高为 0 的 div,三条边透明一条边 solid 即可实现，代码见 triangle.html.

2.  calc, support, media 各自的含义及用法？

    > calc 用来计算 css 属性值。
    > @support 用来检测浏览器是否支持 css 的某个属性，类似于条件判断
    > @media 媒体查询，主要用来做不同媒体类型、不同宽度的设备的兼容

3.  css 水平、垂直居中的写法，请至少写出 4 种？

    水平居中：

    > margin: 0 auto;
    > 外层父元素设置 display: flex + justify-content:center
    > 行内元素：text-align: center
    > position: absolute + left: 50% + transform: translateX(-50)

    垂直居中：

    > line-height = height 可实现文字垂直居中
    > flex: align-items: center
    > margin: auto + position: absolute + top: 0 + bottom: 0
    > position:absolute + top: 50% + transform:translateY(-50%)
    > display:table+display:table-cell + vertical-align: middle;

4.  1rem、1em、1vh、1px 各自代表的含义？

    > 1rem: rem 是相对于根元素
    > 1em: em 是相对于父元素
    > 1vh: vh 是视窗高度，100 为整个视窗高度，1vh 即是百分之一的视窗高度
    > 1px: px 相对于查看设备，尽管像素（px）与 DPI 和查看设备的分辨率有关，但仍被认为是绝对单位，在同一设备上 px 是固定的，不会根据其他任何元素变化

5.  画一条 0.5px 的线？

    > scaleY(0.5)

6.  说一下盒模型？

    > 盒模型分两种：一种是 IE 盒模型，width = padding + border + content;一种是标准盒模型,width = content,使用 box-sizing 属性可以设置盒模型，默认是标准模型，即 content-box

7.  清除浮动的几种方式，及原理？

    > 1. 在最后加一个 div，并给 div 加上 clear: both,会多一个 div,不好，可换成伪元素 after.
    >    创建父级 BFC,overflow: hidden，（不等于 visible 即可）
    >    拓展：块级格式化上下文是 CSS 可视化渲染的一部分。它是一块区域，规定了内部块盒的渲染方式，以及浮动相互之间的影响关系。

    块格式化上下文（BFC）有下面几个特点：

    BFC 是就像一道屏障，隔离出了 BFC 内部和外部，内部和外部区域的渲染相互之间不影响。BFC 有自己的一套内部子元素渲染的规则，不影响外部渲染，也不受外部渲染影响。
    BFC 的区域不会和外部浮动盒子的外边距区域发生叠加。也就是说，外部任何浮动元素区域和 BFC 区域是泾渭分明的，不可能重叠。
    BFC 在计算高度的时候，内部浮动元素的高度也要计算在内。也就是说，即使 BFC 区域内只有一个浮动元素，BFC 的高度也不会发生塌缩，高度是大于等于浮动元素的高度的。
    HTML 结构中，当构建 BFC 区域的元素紧接着一个浮动盒子时，即，是该浮动盒子的兄弟节点，BFC 区域会首先尝试在浮动盒子的旁边渲染，但若宽度不够，就在浮动元素的下方渲染。

8.  说下 label 标签的用法？

    > label 上的 for 属性赋值 radio 的 id 可与 radio 配合使用，作为 radio 的文字说明
    > 可以扩大 label 关联元素的可点击区域，方便操作
    > 与 input 配合可以在聚焦输入元素时方便屏幕阅读器读取，增加可访问性

9.  遍历 A 节点的父节点下的所有子节点？

    > const children =document.getElementById("a").parentNode.children;

10. 浏览器渲染页面的过程

        > 1. DNS 解析:将域名解析为 IP 地址
        > 2. TCP 连接，TCP 三次握手
        > 3. 发送 http 请求
        > 4. 服务器处理请求并返回结果，html
        > 5. 浏览器解析 html,css,构建 dom,cssom 树并合成渲染树，渲染页面
        > 6. 断开连接，TCP 四次挥手
        >    拓展：1. 浏览器如何去通过通过域名去查找 IP,浏览器缓存：浏览器会按照一定频率去缓存 DNS 记录；操作系统缓存：如果在浏览器中没有找到，就会去操作系统中寻找；路由器缓存：缓存在路由器中的DNS 记录；ISP 的 DNS 服务器：ISP 有专门的 DNS 服务器应对 DNS 查询；根服务器：ISP中还是找不到的话，向根服务器发出请求，递归查询，先问.com再问.baidu，以此类推。

            2. tcp三次握手，以同步客户端和服务端的序列号和确认号，并交换tcp窗口的大小信息。
            - 客户端发送一个带SYN=1，Seq=x 的数据包到服务器端口（第一次握手，由浏览器发起，告诉服务器我要发起请求了）
            - 服务器发回一个带SYN=1,ACK=x+1,Seq=Y 的响应包传达确认信息（第二次握手，由服务器发起，告诉浏览器我准备好接受了，你赶紧发送吧）
            - 客户端再传回一个 ACK=y+1,Seq=z 的数据包，代表握手结束（第三次握手由浏览器发送，告诉服务器我马上就发了，你准备好接受）
            为什么需要三次呢？因为为了防止已经失效的连接请求报文段突然又传到了服务端，因而产生错误。

            3. 发送http请求
            4，服务器处理请求并返回结果，常用的web server 有apache,nginx,IIS
            5. 1. 从上至下解析html,形成dom树，深度优先遍历，如果遇到js脚本会阻塞，直至脚本执行完毕
               2. 根据css解析生成cssom树，解析时js暂停执行，直至css规则树就绪
               3. 根据两棵树结合生成渲染树
               4. 根据渲染树计算每一个节点的信息
               5. 根据计算好的信息绘制网页
            6. 断开连接
            发起方向被动方发送报文，Fin、Ack、Seq，表示已经没有数据传输了。并进入 FIN_WAIT_1 状态。(第一次挥手：由浏览器发起的，发送给服务器，我请求报文发送完了，你准备关闭吧)
            被动方发送报文，Ack、Seq，表示同意关闭请求。此时主机发起方进入 FIN_WAIT_2 状态。(第二次挥手：由服务器发起的，告诉浏览器，我请求报文接受完了，我准备关闭了，你也准备吧)
            被动方向发起方发送报文段，Fin、Ack、Seq，请求关闭连接。并进入 LAST_ACK 状态。(第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完了，你准备关闭吧)
            发起方向被动方发送报文段，Ack、Seq。然后进入等待 TIME_WAIT 状态。被动方收到发起方的报文段以后关闭连接。发起方等待一定时间未收到回复，则正常关闭。(第四次挥手：由浏览器发起，告诉服务器，我响应报文接受完了，我准备关闭了，你也准备吧)
            概括：浏览器告诉服务器请求报文发送完毕；服务器告诉浏览器请求报文接受完毕；服务器告诉浏览器响应报文发送完毕；浏览器告诉服务器响应报文接受完毕

11. 说下事件代理（事件委托）？

    > 就是事件并不是直接绑定在目标元素上的，比如 1000 个 li 上不可能每个都绑定一个 click 事件，所以就有了事件代理，将事件绑定在这些子元素的父元素上，通过冒泡的形式执行事件，这样只需要绑定一个事件，就可以监听所有子元素上的 click 事件

12. target 和 currentTarget 的区别？

    > currentTarget: 当前所绑定事件的元素
    > target: 当前被点击的元素

13. link 和 @import 区别？

    > 1. 从属关系：link 是 html 标签（外部资源链接元素），不仅可以用来导入 css,也可以导入别的，如网址的 logo；@import 是 css 的语法，只能够用来导入 css
    > 2. 加载顺序：页面加载时，link 可以与 html 并行下载;@import 引入的 css 将在页面加载完毕后加载，网速慢的情况下，可能会出现开始没有样式，闪烁一下出现样式（FOUC）
    > 3. 兼容性：link 是 html 标签，不存在兼容性问题；@import 是 css2.1 后加入的，仅支持 IE5 以上
    > 4. dom 控制性：js 可以操控 dom 来加入 link 标签；@import 不行

    tips: FOUC: 无样式内容闪烁，当样式表晚于结构性 html 加载，当加载到此样式表时，页面将停止之前的渲染，此样式表被下载和解析后，将重新渲染页面，造成短暂的花屏现象
    导致原因：1. 使用 @import 导入样式表 2. 将样式表放在页面底部 3. 有几个样式表，放在页面的不同位置
    解决方法：使用 link 标签将样式表放在文档 head 中

14. html 有什么优化方法？

    > 1. 语义化 html，语义化标签：<head>、<nav>、<section>、<article>、<footer>，代码可读性更好，页面无样式时也保有较好的可阅读性，利于搜索引擎
    > 2. 减少不必要、无用 dom 元素，加速页面渲染
    > 3. 给图片加上正确的宽高值，减少页面重绘
    > 4. 链接为目录的时候末尾加上”/“，减少一次重定向请求
    > 5. 用 link 而不是 @import 导入样式 6. 样式放页头，js 放页尾

15. css 优化相关

    > 1. 内联首屏关键 css，加快首屏渲染速度，缺点是内联的 css 无法缓存
    > 2. 异步加载 css，js 动态创建 link 样式表，rel 设置为 preload
    > 3. 文件压缩
    > 4. 提取公共类，减少重复样式，删去无用样式
    > 5. 减少使用`昂贵`的 css 属性;filter
    > 6. 减少重绘，重排，启用硬件加速提升动画性能
    > 7. 不使用 @import
    > 8. 图片预加载，设置宽高

16. before 和 after 伪元素是什么，有什么用？

    > 创建一个伪元素，作为被选中元素的最后或第一个元素，默认为行内元素

17. css 如何匹配前 N 个子元素及最后 N 个子元素？

    > 如何匹配最前三个子元素: :nth-child(-n+3)
    > 如何匹配最后三个子元素: :nth-last-child(-n+3)

18. 伪类和伪元素的区别？

    > 伪类使用单冒号，而伪元素使用双冒号。如 :hover 是伪类，::before 是伪元素；
    > 伪元素会在文档流生成一个新的元素，并且可以使用 content 属性设置内容。

19. display: inline 的元素设置 margin 和 padding 会生效吗?

    > 左右生效，上下不生效

20. 谈谈对 styled-component 的看法

    > styled-component 通过给随机类名的方式解决了 css 全局作用域的问题，可以和组件更好的联动，可以用组件里的 props，更耦合，可以继承

21. 你用 css 实现过什么不错的效果？

22. css 选择器优先级排序？

    > 内联 > id 选择器 > 类选择器 > 标签选择器
