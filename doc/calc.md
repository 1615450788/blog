# CSS3:calc计算属性
calc是css3中新增的计算属性，实现了通过表达式实时计算样式；
标准示例示例：
```css
  .class{
        width:calc(50% - 50px);
        width:calc(50% + 5px);
        width:calc(10 * 10px);
        width:calc(10% / 10);
   }
```

## 基本属性
- 任何长度值都可以使用calc()函数进行计算，比如border、margin、pading、font-size和width等
- calc()函数支持 "+", "-", "*", "/" 运算，并且可使用混合运算，以及圆括号建立计算顺序
    - `*`乘法：至少有一个参数必须是`Number`
    - `/`除法：右侧必须是`Number`，除零会导致解析器错误。
    - - 允许嵌套calc()函数，在这种情况下，内部函数被视为简单的圆括号
- 支持的运算单位： rem , em , percentage , px
- 计算优先级别和数学一致
- 在`+`和`-`计算时必须用空格分隔，`*`和`/`除外，但建议所有运算符都采用空格分隔，以增强一致性与可读性！

进阶示例：
```css
  .class{
        width:calc(100% / 3 - (3 * 6px));
   }
```
