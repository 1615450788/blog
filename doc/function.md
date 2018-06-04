# 函数使用准则
当你在创建一个函数的时候，是否有考虑过一个稳定的函数应该包括哪些元素？本文则旨在梳理这些通用的函数使用准则

## 可用

作为一个函数，最基本的要求即是可用正常使用，能对`理想的入参`进行`固定返回`，如：
```javascript
function additive(a) {
  return a++
}
additive(1)===2
additive(2)===3
```

## 可靠

可靠则是测试一个函数在`非理想入参`下是否依然`可用`！常见问题有：
1. 入参是否为空
2. 入参是否为可处理的数据类型，或是否可转换为该类型
3. 入参是否在可处理范围
4. 是否在任何条件下都能返回固定的数据类型

示例：
```javascript
function addiative(a) {
  if(!isEmpty(a)){return 0}
  if(!typeCheck(['string','number'],a)){return 0}
  if(a>100){return 100}
  return a++
}
additive()===0
additive('asd')===0
additive(1000)===100
```

## 可读

一个函数是否可让其他开发人员快速接手，是否能让人对结构一目了然，这些就需要你在开发过程中添加足够多且清晰的注释；如：
```javascript
/**
* 100以下数值追加1
* @param {number} n 需要追加的数值
* @return {number} 返回追加后的数值，如果n非法则返回为0
*/
function addiative(a) {
  //校验参数
  if(!isEmpty(a)){return 0}
  if(!typeCheck(['string','number'],a)){return 0}
  if(a>100){return 100}
  
  //进行追加逻辑
  return a++
}
```
