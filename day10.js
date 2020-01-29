// 1.简述react和vue的区别
// React 和Vue是现在主流的两个框架（相对来说angular用的已经少了）

// 两者的区别体现在以下方面

// 相同点：
// 1、react和vue都支持服务端渲染
// 2、都有虚拟DOM，组件化开发，通过props传参进行父子组件数据的传递
// 3、都是数据驱动视图
// 4、都有支持native的方案（react的react native，vue的weex）
// 5、都有状态管理（react有redux，vue有vuex）


// 不同点：
// 1、react严格上只能算是MVC的view层，vue则是MVVM模式
// 2、虚拟DOM不一样，vue会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树
// 而对于react而言，每当应用的状态被改变时，全部组件都会重新渲染，所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
// 3、组件写法不一样，react推荐的做法是JSX+inline style,也就是把HTML和CSS全都写进javaScript了
// 4、数据绑定：vue实现了数据的双向绑定，react数据流动是单向的
// 5、state对象在react应用中是不可变的，需要使用setState方法更新状态
// 在vue中，state对象不是必须的，数据有data属性在vue对象中管理

// 2.简述spa，spa实现原理
// 一、什么是SPA（SPA 的概念）
// 　　　　单页 Web 应用 (single-page application 简称为 SPA)，简单理解为：仅仅在web页面初始化时加载相应的HTML、JavaScript、CSS，一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态的变换HTML的内（采用的是div切换显示和隐藏），从而实现UI与用户的交互。
// 二、SPA的优缺点
// 　　　　1、优点：
// 　　　　　　（1）由于避免了页面的重新加载，SPA 可以提供较为流畅的用户体验。得益于ajax，我们可以实现无跳转刷新，又多亏了浏览器的histroy机制，我们用hash的变化从而可以实现推动界面变化。
// 　　　　　　（2）只要使用支持HTML5和CSS3的浏览器就可以执行复杂的SPA,因此，开发人员不必为了写SPA网站而特别学习另一个开发方式，而使用者也不额外安装软件，所以，让开发SPA网页程序的入门和使用门槛降低不少。
// 　　　　2、缺点：
// 　　　　　　以SPA方式开发的网站不容易管理也不够安全。因为没了一页一页的网页给搜索引擎的爬虫来爬，所以，在搜索引擎最佳化（SEO）的工作上，需要花费额外的功夫。因为没有换页，需要自定义状态来取代传统网页程序以网址来做判断。