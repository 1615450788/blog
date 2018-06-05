# VUE虚拟DOM

DOM是文档对象模型(Document Object Model)的简写，在浏览器中我们可以通过js来操作DOM，但是这样的操作性能很差，于是Virtual Dom应运而生，Virtual Dom就是在js中通过对象模拟DOM对象树来优化DOM操作的一种技术或思路。

Virtual Dom是树状结构，其节点为vnode，vnode和浏览器DOM中的Node一一对应，通过vnode的elm属性可以访问到对应的Node。

## VNode对象
一个VNode的实例对象包含了以下属性

- `tag`: 当前节点的标签名
- `data`: 当前节点的数据对象，具体包含哪些字段可以参考vue源码types/vnode.d.ts中对VNodeData的定义
- `children`: 数组类型，包含了当前节点的子节点
- `text`: 当前节点的文本，一般文本节点或注释节点会有该属性
- `elm`: 当前虚拟节点对应的真实的dom节点
- `ns`: 节点的namespace
- `context`: 编译作用域
- `functionalContext`: 函数化组件的作用域
- `key`: 节点的key属性，用于作为节点的标识，有利于patch的优化
- `componentOptions`: 创建组件实例时会用到的选项信息
- `child`: 当前节点对应的组件实例
- `parent`: 组件的占位节点
- `raw`: 预编译的html模板，也就是template标签内的html代码
- `isStatic`: 静态节点的标识
- `isRootInsert`: 是否作为根节点插入，被<transition>包裹的节点，该属性的值为false
- `isComment`: 当前节点是否是注释节点
- `isCloned`: 当前节点是否为克隆节点
- `isOnce`: 当前节点是否有v-once指令

## VNode类型

- `EmptyVNode`: 没有内容的注释节点
- `TextVNode`: 文本节点
- `ElementVNode`: 普通元素节点
- `ComponentVNode`: 组件节点
- `CloneVNode`: 克隆节点，可以是以上任意类型的节点，唯一的区别在于isCloned属性为true

## diff算法

Virtual Dom因为是纯粹的JS对象，所以操作它会很高效，但是Virtual dom的变更最终会转换成DOM操作，为了实现高效的DOM操作，一套高效的虚拟DOM diff算法显得很有必要。

Vue的diff算法是基于snabbdom改造过来的，感兴趣的朋友可以选择查阅。

Vue的diff算法仅在同级的vnode间做diff，递归地进行同级vnode的diff，最终实现整个DOM树的更新。