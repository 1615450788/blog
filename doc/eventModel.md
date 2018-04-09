# 事件模型

## DOM0级模型（原始事件模型）

改模型中事件不会传播，没有事件流的概念，事件绑定监听函数比较简单，有两种方式:

1. 在DOM中绑定
```html
<button onclick="fu()">我是按钮</button>
```

2. 在Javascript中绑定
```javascript
var btn = document.getElementById('name');
btn.onclick = fun;
```

## IE事件模型
IE事件模型共有两个过程:
- 事件处理阶段(target phase)；事件到达目标元素, 触发目标元素的监听函数。
- 事件冒泡阶段(bubbling phase)；事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

事件绑定监听函数的方式如下:

1. 事件绑定监听函数的方式
```javascript
attachEvent(eventType, handler)
```

2. 事件移除监听函数的方式如下:
```javascript
detachEvent(eventType, handler)
```

参数说明:
- eventType指定事件类型(注意加on)
- handler是事件处理函数

Example:
```javascript
var btn = document.getElementById('name');
btn.attachEvent('onclick', showMessage);
btn.detachEvent('onclick', showMessage);
```

## DOM2级模型
属于W3C标准模型，现代浏览器(除IE6-8之外的浏览器)都支持该模型。在该事件模型中，一次事件共有三个过程:

- 事件捕获阶段(capturing phase)。事件从document一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
- 事件处理阶段(target phase)。事件到达目标元素, 触发目标元素的监听函数。
- 事件冒泡阶段(bubbling phase)。事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

事件绑定监听函数的方式如下:
1. 事件绑定监听函数的方式
```javascript
addEventListener(eventType, handler, useCapture)
```

2. 事件移除监听函数的方式如下:
```javascript
removeEventListener(eventType, handler, useCapture)
```

参数说明:
- eventType指定事件类型(不要加on)
- handler是事件处理函数
- useCapture是一个boolean用于指定是否在捕获阶段进行处理，一般设置为false与IE浏览器保持一致。

Example:
```javascript
var btn = document.getElementById('name');
btn.addEventListener('click', showMessage, false);
btn.removeEventListener('click', showMessage, false);
```
