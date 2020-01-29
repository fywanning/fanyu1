// 1.总结http协议 、同源策略、跨域问题

// 同源策略 Same-Origin-Policy(SOP)
// 浏览器采用同源策略，禁止页面加载或执行与自身来源不同的域的任何脚本。换句话说浏览器禁止的是来自不同源的"document"或脚本，对当前"document"读取或设置某些属性。
// 情景：
// 比如一个恶意网站的页面通过iframe嵌入了银行的登录页面（二者不同源），如果没有同源限制，恶意网页上的javascript脚本就可以在用户登录银行的时候获取用户名和密码。
// 浏览器中有哪些不受同源限制呢？
// <script>、<img>、<iframe>、<link>这些包含 src 属性的标签可以加载跨域资源。但浏览器限制了JavaScript的权限使其不能读、写加载的内容。



// 跨域
// 跨域是指从一个域的网页去请求另一个域的资源。比如从http://www.baidu.com/ 页面去请求 http://www.google.com 的资源。



// HTTP定义了与服务器交互的不同方法，最基本的方法有4种，分别是GET，POST，PUT，DELETE。URL全称是资源描述符，我们可以这样认为：一个URL地址，它用于描述一个网络上的资源，而 HTTP 中的GET，POST，PUT，DELETE就对应着对这个资源的查，增，改，删4个操作。


// 2.中间件模式（middleware）是一种很常见、也很强大的模式，被广泛应用在 Express、Koa、Redux 等类库和框架当中。模拟一个中间件模式。
// express模式下：
const fs=require('fs')
const path=require('path')
const express=require('express')
const server=express()
server.use(writeLogs)
server.get('/',(req,res)=>{
	res.send('ok')
})
server.listen(3000,()=>{
   console.log('Express server running at http://127.0.0.1:3000')
})
function writeLogs(req,res,next){
    const info=`${new Date().toLocaleString()} ${req.url} ${req.method}\n`
    fs.appendFile(path.join(__dirname,'./info.txt'),info,(err)=>{
    	if(err)throw err
    	console.log('写入日志成功')
         next()
     })
}