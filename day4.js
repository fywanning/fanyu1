// 1.用自己的话描述js垃圾回收机制

// JavaScript 中的内存管理是自动执行的，而且是不可见的。我们创建基本类型、对象、函数……所有这些都需要内存。


// 3.深入理解this执行
function Foo() {
    getName = function() { alert(1); }
    return this
}
Foo.getName = function() { alert(2); }
Foo.prototype.getName = function() { alert(3); }
var getName = function () { alert(4); }
function getName() { alert(5); }

// 输出值？ 请写出原因
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName()
// new Foo().getName()
// new new Foo().getName()


// 方式1：一个构造函数嘛，里面有个全部变量getName 指向一个匿名函数（小心闭包）
function Foo() {
    getName = function () { 
        console.log (1); 
    };
    return this;
}
// 方式2：构造函数的一个属性getName 指向一个匿名函数
   Foo.getName = function () { 
    console.log (2); 
};
// 方式3：构造函数的原型上有个getName方法
   Foo.prototype.getName = function () { 
    console.log('baidu' && 'google'); 
};
// 方式4：定义一个变量指针指向一个匿名函数
   var getName = function () { 
    console.log (4);
};
// 方式5：声明一个叫getName的有名函数
    function getName() { 
    console.log (5);
}


Foo.getName();                                    //  2  
getName();                                        //  4  
Foo().getName();                                  //  1  
getName();                                        //  1  
new Foo.getName();                                //  2  
new Foo().getName();                              // google  
new new Foo().getName();                          // google  

// 4. 重绘和回流（重排）的区别和关系 用自己的话描述

// 重绘：当渲染树中的元素外观（如：颜色）发生改变，不影响布局时，产生重绘
// 回流：当渲染树中的元素的布局（如：尺寸、位置、隐藏/状态状态）发生改变时，产生重绘回流
// 注意：JS 获取 Layout 属性值（如：offsetLeft、scrollTop、getComputedStyle 等）也会引起回流。因为浏览器需要通过回流计算最新值
// 回流必将引起重绘，而重绘不一定会引起回流