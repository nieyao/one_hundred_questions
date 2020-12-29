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
    > flex: align-items: \center
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
