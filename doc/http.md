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
    - `Accept: text/plain, text/html` --指定客户端能够接收的内容类型
    - `Accept-Charset: iso-8859-5` --浏览器可以接受的字符编码集
    - `Accept-Encoding: compress, gzip` --指定浏览器可以支持的web服务器返回内容压缩编码类型
    - `Accept-Language: en,zh` --浏览器可接受的语言
    - `Accept-Ranges: bytes` --可以请求网页实体的一个或者多个子范围字段
    - `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==` --HTTP授权的授权证书
    - `Cache-Control: no-cache` --指定请求和响应遵循的缓存机制
    - `Connection: close` --表示是否需要持久连接。（HTTP 1.1默认进行持久连接）
    - `Cookie: $Version=1; Skin=new;` --HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。
    - `Content-Length: 348` --请求的内容长度
    - `Content-Type: application/x-www-form-urlencoded` --请求的与实体对应的MIME信息
    - `Date: Tue, 15 Nov 2010 08:12:31 GMT` --请求发送的日期和时间
    - `Expect: 100-continue` --请求的特定的服务器行为	
    - `From: user@email.com` --发出请求的用户的Email
    - `Host: www.zcmhi.com` --指定请求的服务器的域名和端口号
    - `If-Match: "737060cd8c284d8af7ad3082f209582d"` --只有请求内容与实体相匹配才有效
    - `If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT` --如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码
    - `If-None-Match: "737060cd8c284d8af7ad3082f209582d"` --如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变
    - `If-Range: "737060cd8c284d8af7ad3082f209582d"` --如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变
    - `If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT` --只在实体在指定时间之后未被修改才请求成功
    - `Max-Forwards: 10` --限制信息通过代理和网关传送的时间	
    - `Pragma: no-cache` --用来包含实现特定的指令
    - `Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==` --连接到代理的授权证书
    - `Range: bytes=500-999` --只请求实体的一部分，指定范围
    - `Referer: http://www.zcmhi.com/archives/71.html` --先前网页的地址，当前请求网页紧随其后,即来路
    - `TE: trailers,deflate;q=0.5` --客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息
    - `Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11` --向服务器指定某种传输协议以便服务器进行转换（如果支持）
    - `User-Agent: Mozilla/5.0 (Linux; X11)` --User-Agent的内容包含发出请求的用户信息
    - `Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)` --通知中间网关或代理服务器地址，通信协议
    - `Warn: 199 Miscellaneous warning` --关于消息实体的警告信息
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
http response报文协议结构和http request报文协议结构几乎相同，第一部分为响应行，第二部分为响应头，第三部分为响应实体
- 第一行为响应状态行
    - 第一个单词为http协议值，比如http/0.9 http/1.0 htpp/1.1 
    - 第二个单词为响应的状态码。比如 200表示服务端处理该请求成功，4XX开头是客户端发的http resquest有问题，5XX为服务端内部处理出错。3XX为页面转发
- 第二部分响应头
    - 同请求头
    - `Location: http://www.it315.org/index.jsp` --重定向地址。通常和302状态码配合使用，完成请求重定向效果
    - `Server:apache tomcat` --服务器类型
    - `Content-Encoding: gzip` --服务器发送给浏览器的数据压缩格式
    - `Content-Length: 80` --服务器发送给浏览器数据长度
    - `Content-Language: zh-cn` --服务器发送给浏览器数据语言
    - `Content-Type: text/html; charset=GB2312` --服务器发送给浏览器数据类型
    - `Last-Modified: Tue, 11 Jul 2000 18:23:51GMT` --服务器资源最后修改时间
    - `Refresh: 1;url=http://www.it315.org` --定时刷新或每隔n秒跳转页面
    - `Content-Disposition: attachment; filename=aaa.zip` --告诉浏览器以下载方式打开资源
    - `Transfer-Encoding: chunked`
    - `Set-Cookie:SS=Q0=5Lb_nQ; path=/search` --服务器发送给浏览器的cookie信息 
    - `Expires:-1` --建议浏览器不使用缓存
    - `Cache-Control:no-cache`
    - `Pragma:no-cache`
    - `Connection: close/Keep-Alive` --服务器和浏览器连接状态。close：关闭连接。keep-alive:保持连接。
    - `Date: Tue, 11 Jul 2000 18:23:51 GMT` --响应发送的时间
- 第三部分响应实体
    - 同请求实体
    
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