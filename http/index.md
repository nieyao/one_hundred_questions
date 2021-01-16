1.  介绍一下 CORS?

    > CORS: 跨域资源共享,是一种基于 http 头的机制，通过允许服务器标示除了自己以外的其他 origin，使得浏览器可以跨域加载资源，复杂请求下还有一种预检请求的机制。
    > 要点：

            1. 同源策略仅在浏览器上，服务器无此限制
            2. xhr 或 fetch 发起的跨域请求需要CORS
            3. OPTIONS 预检请求，复杂请求需要，简单请求不需要
            4. 简单请求需要满足的条件很多，如是 GET,HEAD,POST之一;限定的首部字段集合;限定的content-type;XMLHttpRequestUpload 对象没有注册事件监听器;请求中没有使用 ReadableStream 对象
            5. ACCESS-CONTROL-ALLOW-ORIGN,应当为 * 或者包含由 Origin 首部字段所指明的域名
            6. Access-Control-Max-Age,预检请求最大有效时间

2.  如何中断 ajax 请求？

    > 1. 设置超时时间，超时后自动断开
    > 2. 利用 xhr 的 abort 方法

3.  GET 和 POST 区别？

    > 1. GET 用于获取信息，是无副作用的，幂等的，可以缓存；POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存；
    > 2. 本质上没有区别，只是报文格式不同；GET 和 POST 只是 HTTP 协议中的两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论是 GET 还是 POST 用的都是同一个传输层协议，所以在传输上没有区别
    > 3. 理论上 POST 和 GET 都不安全，只要被抓包（抓包工具：Wireshark）都可以完整拿到数据报文
    > 4. 对于 URL 的长度限制是浏览器加的，HTTP 协议没有此限制
