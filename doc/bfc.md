# BFC
BFC(block formatting context）块级格式化上下文，简单来说，就是一种属性，这种属性会影响着元素的定位以及与其兄弟元素之间的相互作用。

## 来源
W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

## 生效条件
- `float:left||right`， 除`none`以外的值； 
- `position:absolute||fixed`； 
- `display:inline-blocks||table-cells||table-captions` 
- `overflow:hidden||auto||scroll` ,除了`visible`以外的值

## 常见案例
### 1.包含浮动元素 
在通常情况下父元素的高度会被子元素撑开，而在这里因为其子元素为浮动元素所以父元素发生了高度坍塌，上下边界重合。这时就可以用bfc来清除浮动了。 
### 2.不被浮动元素覆盖
由于左侧块级元素发生了浮动，所以和右侧未发生浮动的块级元素不在同一层内，所以会发生div遮挡问题。可以给蓝色块加 overflow: hidden，触发bfc来解决遮挡问题。 
### 3.BFC会阻止外边距折叠  
在标准文档流中，块级标签之间竖直方向的margin会以大的为准，这就是margin的塌陷现象。可以用overflow：hidden产生bfc来解决。 