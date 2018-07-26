Vue学习过程及项目使用问题及资料整理
## Vue框架简介及方法
 
Vue简介：渐进式 JavaScript 框架
特点：易用，灵活，性能

## 参考资料网址汇总
- [Vue中文官网](https://cn.vuejs.org)
- [Vuex中文官网](https://vuex.vuejs.org/zh-cn/)
- [使用Flexible实现手淘H5页面的终端适配](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
- [html head整理汇总](https://github.com/joshbuchea/HEAD)
- [Vue 项目里戳中你痛点的问题及解决办法](https://juejin.im/post/5b174de8f265da6e410e0b4e)
- [移动端网页性能优化自查表](https://juejin.im/post/5b3c0d26e51d45191556b527?utm_source=gold_browser_extension)

## Vue 组件日常使用及注意点
- 核心插件
	- 	Vue 
	-  Vue-Router
	-  Vuex
-  推荐插件
	- axios 
	- vue-resource  
- 常用视图插件
- 性能优化插件
	- vue-lazy-render
	
## 项目开发通用知识
- 移动端字体

	```
	 body {
	  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
	 }
	```
- css 重置样式文件核心代码
	
	```
	
	```
- 点击输入框，弹出的键盘会把输入框盖住bug修复

	```
	var element = document.getElementById("box");
	element.scrollIntoView();
	//element.scrollIntoView(false);
	//scrollIntoView 可选参数是 true false，默认是true
	//true 元素的顶端将和其所在滚动区的可视区域的顶端对齐。
	//false 元素的底端将和其所在滚动区的可视区域的底端对齐。
	```
- flex的伸缩项目被设置margin：auto时，就有意想不到的效果,其设置了为’auto’ 的 margin 会合并剩余的空间。它可以用来把伸缩项目挤到其他位置
	
	```
	<style>
     .flex{display: flex;justify-content: space-between;}
     .right {margin-right: auto;}
	</style>
	<div class='flex'>
	  <button class='right'>菜单</button>
	   <button>登录</button>
	   <button>注销</button>
	</div>
	``` 

## Vue项目问题及解决方案
- 列表进入详情页的传参的方式（query、params+动态路由传参）
	1. query通过path切换路由，params通过name切换路由
	
	```
	// query通过path切换路由
	<router-link :to="{path: 'Detail', query: { id: 1 }}">前往Detail页面</router-link>
	// params通过name切换路由
	<router-link :to="{name: 'Detail', params: { id: 1 }}">前往Detail页面</router-link>
	```
	2.  两种方式作用基本相同，但存在页面刷新情况的时候，推荐query方式传参  
- 本地开发环境请求服务器接口跨域的问题
	1. 通过vue-cli初始化的项目，在配置文件中提供了proxyTable来解决本地开发的跨域问题，在config文件的index.js文件中，找到proxyTable选项，进行如下配置：
	
	```
	proxyTable: {
      // 用‘/api’开头，代理所有请求到目标服务器
      '/api': {
        target: 'http://jsonplaceholder.typicode.com', // 接口域名
        changeOrigin: true, // 是否启用跨域
        pathRewrite: { //
          '^/api': ''
        }
      }
	}
	``` 
	例如请求接口：/api/posts/1 ==>http://jsonplaceholder.typicode.com/posts/1。
	2. chrome本地请求跨域可以用这个命令来禁用浏览器安全模式：open -a Google\ Chrome --args --disable-web-security --user-data-dir。
	
- axios的封装和API接口的统一管理
	- axios的封装，主要是用来帮我们进行请求的拦截和响应的拦截。
		1. 在请求的拦截中我们可以携带userToken，post请求头、qs对post提交数据的序列化等。
		2. 在响应的拦截中，我们可以进行根据状态码来进行错误的统一处理等等。
	- axios接口的统一管理，是做项目时必须的流程。这样可以方便我们管理我们的接口。
-  UI库的按需加载
	- 支持按需加载的UI库实现方法大同小异，核心都是采用babel-plugin-import插件，具体还是以各自的文档说明为主。  
	- 安装UI库，安装babel-plugin-import插件，在.babelrc文件中配置
	
	```
	libraryDirectory { 
     "plugins": [ 
        // 这里是原来的代码部分
        // 这里是要我们配置的代码
        ["import", 
            { 
                "libraryName": "vant", 
                "libraryDirectory": "es", 
                "style": true 
            }
         ] 
    	] 
	  }
	``` 
	- 在main.js中按需加载你需要的插件：import { DatetimePicker, Button, List } from 'vant';
	- 使用组件：Vue.use(DatetimePicker).use(Button).use(List);
	- 在页面中使用：<van-button type="primary">按钮</van-button>
- 页面内周期性定时器(setInterval)跨页面不清除问题
	- 解决方法1：在data函数里面进行定义，使用时用this.timer方式，最后在beforeDestroy()生命周期内清除定时器。
	
	```
	data() {            
     return {                              
       timer: null  // 定时器名称          
     }        
	},
	this.timer = (() => {
     // 某些操作
   }, 1000)
   beforeDestroy() {
     clearInterval(this.timer);        
     this.timer = null;
   }
	```
	缺点：需在组件实例保存 timer, 对于页面存在多个定时需要多个timer, 清理代码独立于定时器部分
	- 解决方法2：通过$once事件侦听器在定义完定时器之后的位置来清除定时器。
	
	```
	const timer = setInterval(() =>{                    
     // 某些定时器操作                
	}, 500);            
	// 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
	this.$once('hook:beforeDestroy', () => {            
	    clearInterval(timer);                                    
	})
	```
- Vue-Awesome-Swiper基本能解决你所有的轮播需求，实质上基于swiper的
- fastClick的300ms延迟解决方案：在main.js中引入fastClick和初始化
	
	```
	import FastClick from 'fastclick'; // 引入插件
	FastClick.attach(document.body); // 使用 fastclick
	``` 
- 开启gzip压缩代码(减少文件体积，能压缩到30%左右)
	1. vue-cli初始化的项目，默认有此配置，开启即可，但需先安装插件：compression-webpack-plugin。
	2. 在config/index.js中开启:
		
		```
		build: {
	      ………………
	      productionGzip: true, // false不开启gizp，true开启
	      ………………
		}
		```
	3. **注意**：这里前端进行的打包时的gzip，但是还需要后台服务器的配置。配置是比较简单的，配置几行代码就可以了。
- 路由懒加载（进入首屏时不用加载过度的资源，从而减少首屏加载速度）
	路由懒加载写法：
	
	```
	export default new Router({
	  routes: [    
	     { 
	         path: '/', 
	         name: 'Index', 
	         component: resolve => require(['@/view/index/index'], resolve) 
	      }
	   ]
	})
	```
- 

	
	 
	 




