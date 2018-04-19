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

## request部分报文结构
http 协议规定，http request部分报文分三部分。第一部分是请求行，第二部分是请求头，第三部分是请求实体。
- 第一部分（行）为请求行
    - 第一个单词为请求的方法。比如GET(请求服务端数据)，post(更新数据到服务端)，DELETE(删除服务端数据)，PUT(新增数据到服务端) OPTION，TRACE等等。
    - 第二个单词为请求的相对路径
    - 第三个单词为http版本。目前有HTTP/1.1 HTTP/1.0 HTTP/0.9。目前几乎所有的浏览器和httpClient客户端都是HTTT/1.1。除非你的浏览器或者HttClient很老了（建议赶紧升级吧）。
    - http规定请求行中，第一个、第二个、第三个单词间必须要有一个空格
    - 最后以两个字节\r\n（13和10也就是回车+换行结束）做为请求行的标示结束。
- 第二部分请求头
    - 请求头由多行`headerName: headerValue`对组成，每行一对，用一个`:`冒号和` `一个空格分开，通过`\r\n`区分每对`header`
    - 请求头部的最后会有一个空行，表示请求头部结束，接下来为请求正文，这一行非常重要，必不可少
- 第三部分请求实体（正文）
    - 请求实体为特定格式的字符串，格式由`Content-Type`决定
    - GET请求方法没有请求正文
    
示例如下：
```
GET /search?hl=zh-CN&source=hp&q=domety&aq=f&oq= HTTP/1.1  
Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint, 
application/msword, application/x-silverlight, application/x-shockwave-flash, */*  
Referer: <a href="http://www.google.cn/">http://www.google.cn/</a>  
Accept-Language: zh-cn  
Accept-Encoding: gzip, deflate  
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; TheWorld)  
Host: <a href="http://www.google.cn">www.google.cn</a>  
Connection: Keep-Alive  
Cookie: PREF=ID=80a06da87be9ae3c:U=f7167333e2c3b714:NW=1:TM=1261551909:LM=1261551917:S=ybYcq2wpfefs4V9g; 
NID=31=ojj8d-IygaEtSxLgaJmqSjVhCspkviJrB6omjamNrSm8lZhKy_yMfO2M4QMRKcH1g0iQv9u-2hfBW7bUFwVh7pGaRUb0RnHcJU37y-
FxlRugatx63JLv7CWMD6UB_O_r  
```

```
POST /search HTTP/1.1  
Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint, 
application/msword, application/x-silverlight, application/x-shockwave-flash, */*  
Referer: <a href="http://www.google.cn/">http://www.google.cn/</a>  
Accept-Language: zh-cn  
Accept-Encoding: gzip, deflate  
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; TheWorld)  
Host: <a href="http://www.google.cn">www.google.cn</a>  
Connection: Keep-Alive  
Cookie: PREF=ID=80a06da87be9ae3c:U=f7167333e2c3b714:NW=1:TM=1261551909:LM=1261551917:S=ybYcq2wpfefs4V9g; 
NID=31=ojj8d-IygaEtSxLgaJmqSjVhCspkviJrB6omjamNrSm8lZhKy_yMfO2M4QMRKcH1g0iQv9u-2hfBW7bUFwVh7pGaRUb0RnHcJU37y-
FxlRugatx63JLv7CWMD6UB_O_r  

hl=zh-CN&source=hp&q=domety  
```

大家都知道，通过网络传输，传输的都是bit位（由Byte字节转换），服务端接受到http request部分后，读出来的数据也是Byte流。服务端是怎样截取Byte流的，比如什么时候header结束，http body开始。

通过两个连续的字节`13`和`10`，也就是`\r\n`（回车换行符）。表示`http header`结束，`http body`开始

http body的结束，是通过`header`中的`Content-length`指定的，以`Content-length`的大小，计算body的长度，有些是以传输块指定的`body`，`Content-length`无法指定，则会按相应的规则解析`body`中字节流，拿到每块的大小，然后再解析

## response部分报文结构
http response报文协议结构和http request报文协议结构几乎相同，第一部分为应答状态行，第二部分为应答头，第三部分为应答实体
- 第一行为响应状态行
    - 第一个单词为http协议值，比如http/0.9 http/1.0 htpp/1.1 
    - 第二个单词为响应的状态码。比如 200表示服务端处理该请求成功，4XX开头是客户端发的http resquest有问题，5XX为服务端内部处理出错。3XX为页面转发
    
```
HTTP/1.1 200 OK
Date: Sat, 31 Dec 2005 23:59:59 GMT
Content-Type: text/html;charset=ISO-8859-1
Content-Length: 122

＜html＞
＜head＞
＜title＞Wrox Homepage＜/title＞
＜/head＞
＜body＞
＜!-- body goes here --＞
＜/body＞
＜/html＞
```

http response 头部字段和http response 实体部分也是通过两个连续的回车(13)换行(10)符进行分割的。

http response header之间和header内容中的结构和分割和http request header规则一样。

http response结束，也是通过http response header中的Content-length字段的值确认的（有时，服务端生成动态内容，body的大小无法计算，有时以header中的Transfer-Encoding为准，http协议规定有Transfer-Encoding，以Transfer-Encoding为准，没有Transfer-Encoding以Content-length为准）