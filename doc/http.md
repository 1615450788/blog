# HTTP协议概述
## 简介
HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web）服务器传输超文本到本地浏览器的传送协议，是基于TCP/IP通信协议来传递数据（HTML文件, 图片文件, 查询结果等）。

## 特点
1. 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。
1. 无连接：每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。
1. 无状态：无状态是指协议对于事务处理没有记忆能力，即无法判断任意两次请求的相关性。

## URI URL和URN
- URI：Uniform Resource Identifier，即统一资源标识符，用来`唯一的标识`一个资源。

- URL：Uniform Resource Locator，统一资源`定位`符。即URL可以用来标识一个资源，而且还指明了如何`定位`这个资源。

- URN：Uniform Resource Name，统一资源命名。即通过名字来表示资源。

上述说明可能比较抽象，下面来举个具体的例子进行说明：

- URI是`https://github.com/1615450788/resume#path?name=1`
- `https`是说明定位资源的方式
- `github.com/1615450788/resume`是说明资源存放的位置
- `#path?name=1`是资源

那么

- URL就是`https://github.com/1615450788/resume`它标识了一个资源所在位置与定位资源的方式
- URN就是`github.com/1615450788/resume#path?name=1`它标识了资源但是没有说明资源的定位方式

