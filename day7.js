// 1.简述webpack模块打包原理

// webpack只是一个打包模块的机制，只是把依赖的模块转化成可以代表这些包的静态文件。并不是什么commonjs或者amd之类的模块化规范。webpack就是识别你的 入口文件。识别你的模块依赖，来打包你的代码。至于你的代码使用的是commonjs还是amd或者es6的import。webpack都会对其进行分析。来获取代码的依赖。webpack做的就是分析代码。转换代码，编译代码，输出代码。webpack本身是一个node的模块，所以webpack.config.js是以commonjs形式书写的(node中的模块化是commonjs规范的)
// webpack中每个模块有一个唯一的id，是从0开始递增的。整个打包后的bundle.js是一个匿名函数自执行。参数则为一个数组。数组的每一项都为个function。function的内容则为每个模块的内容，并按照require的顺序排列。


// 2.简述webpack loader

// 在解析对于文件，会自动去调用响应的loaderloader 本质上是一个函数，输入参数是一个字符串，输出参数也是一个字符串。当然，输出的参数会被当成是 JS 代码，从而被 esprima 解析成 AST，触发进一步的依赖解析。webpack会按照从右到左的顺序执行loader。


// 3.Webpack一些常用的自定义配置
// const path = require('path');

// module.exports = {
//   // 1. 入口
//   entry: './src/index.js',

//   // 2. 出口
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js'
//   },

//   // 3. loader 规则
//   module: {
//     rules: []
//   },

//   // 4. 插件
//   plugins: [

//   ],

//   // 5. 模式
//   mode: 'development' // 打包的模式
// }



// 4.开发和生产环境的构建配置差异，如何优化webpack构建速度

// webpack在启动时会从配置的Entry出发，解析出文件中的导入语句，再递归解析。
// 对于导入语句Webpack会做出以下操作：

// 根据导入语句寻找对应的要导入的文件；
// 在根据要导入的文件后缀，使用配置中的Loader去处理文件（如使用ES6需要使用babel-loader处理）
// 针对这两点可以优化查找途径

// 1.优化Loader配置
// 2.优化resolve.modules配置
// 3.优化resolve.extensions配置


