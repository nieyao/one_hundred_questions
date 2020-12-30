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
