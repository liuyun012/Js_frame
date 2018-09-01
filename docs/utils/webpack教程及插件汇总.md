# Webpack使用问题及资料整理

## Webpack的简介及使用教程
 
Webpack核心概念：webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

## 参考资料网址汇总
- [Webpack中文官网](https://doc.webpack-china.org)
- [webpack -- github](https://github.com/webpack/webpack)
- [webpack-demos 阮一峰](https://github.com/ruanyf/webpack-demos)
- [[React项目总结] 基于 webpack 搭建前端工程基础篇](https://github.com/chenbin92/react-redux-webpack-starter/issues/1)
- [webpack 3 & React 的配置](http://www.cnblogs.com/likeFlyingFish/p/7399704.html?utm_source=tuicool&utm_medium=referral)

## Webpack 打包参数汇总
- --config webpack.config.js : 指定使用的配置文件
- --progress: 打包进度
- --display-modules: 打包的模块
- --colors: 是否彩色显示，打包提示信息
- --display-reasons: 打包原因
- --watch: 自动监控文件变化
- --hot: 开启模块热替换
- --define: 定义任意的自由变量: --define process.env.NODE_ENV='development'
- --debug : 把loader设置为 debug 模式
- --profile: 捕获编译时每个步骤的时间信息，并且将这些信息包含在输出中
- --bail: 一旦发生错误，立即终止
- --cache: 开启缓存[watch 时会默认打开]


## Webpack 配置及插件汇总
- 核心插件
	- common-chunks-webpack-plugin
	- html-webpack-plugin
	- i18n-webpack-plugin
	- compression-webpack-plugin
	- extract-text-webpack-plugin
- 推荐插件
	- CommonsChunkPlugin
	- webpack-bundle-analyzer(BundleAnalyzerPlugin)
	- optimize-css-assets-webpack-plugin(OptimizeCssAssetsPlugin)


- 特殊插件
	- cross-env  使用cross-env解决跨平台设置NODE_ENV的设置问题 
	
	```
	
	```
	
	- webpack-monitor 捕获构建生成的，生产环境中包体关键统计指标，提供了交互式地分析工具，来帮助开发者更好地审视包体的构成，以此来识别与选择可用的优化策略。

## devtool 模块简介
[webpack devtool里的7种SourceMap模式](https://juejin.im/post/58293502a0bb9f005767ba2f)

```
devtool: "source-map", // or "inline-source-map"
```

## entry 和 output 模块简介	
- 一个入口一个出口的情况

```
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
编译后的文件为  bundle.js
```
- 多个入口多个出口的情况(文件一一对应)

```
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
编译后的文件为  bundle1.js, bundle2.js
```	
## resolve 模块简介


## module 模块简介
- js或者jsx文件的处理

```
module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  }
```
- css 文件的处理

```
module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
 }
```
- 图片的处理(jpg、png)，小于8kb(limit可修改为其他)的，转为base64

```
module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
 }
```
- 

## plugins 插件模块简介
- var webpack = require('webpack');
- uglifyJsPlugin（webpack.optimize.UglifyJsPlugin）

```
// js压缩插件
new uglifyJsPlugin({
      compress: {
        warnings: false
      }
	})
```
- DefinePlugin (webpack.DefinePlugin)

```
// 设置webpack默认的环境变量
new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
 	})
 	执行 env DEBUG=true, 修改参数的值
```
- CommonsChunkPlugin (webpack.optimize.CommonsChunkPlugin)

```
// 提取公共部分插件（js,css）
new CommonsChunkPlugin('init.js')
```
- HtmlwebpackPlugin (html-webpack-plugin) [html-webpack-plugin详解](http://www.cnblogs.com/wonyun/p/6030090.html)

```
// html 模板修改插件
new HtmlwebpackPlugin({
      title: '标题',
      template: 'index.html', // 源模板文件
      filename: 'index.html'   // 输出文件【注意：这里的根路径是module.exports.output.path】
    }),
```
- HotModuleReplacementPlugin (webpack.HotModuleReplacementPlugin)

```
// 热更新插件
  new webpack.HotModuleReplacementPlugin(),
```
- BundleAnalyzerPlugin （require('webpack-bundle-analyzer').BundleAnalyzerPlugin）

```
// 图形化打包结果显示
new BundleAnalyzerPlugin(), 
```
- OpenBrowserPlugin (open-browser-webpack-plugin)

```
// 自动打开浏览器插件，端口号默认 8080
new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
```
- BannerPlugin (webpack.BannerPlugin)

```
//这里是打包文件头部注释！
new webpack.BannerPlugin('这是一个注释头')
```
- LoaderOptionsPlugin (webpack.LoaderOptionsPlugin)

```
// 去除调试代码，压缩代码
```
- CopyWebpackPlugin（copy-webpack-plugin）

```
// 复制手动引入的资源文件到指定目录
new CopyWebpackPlugin([
        {
            from: config.srcPath + '/static',
            to: config.outputPath,
            ignore: ['.*']
        }
    ])
```
- 



