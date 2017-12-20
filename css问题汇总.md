# CSS 语法整理
平常项目中遇到的css不常用语法整理 by Qzx
## css问题解决及说明相关网址
- [前端CSS规范整理 -- 标点符](https://www.biaodianfu.com/css-style-guide.html)
- [编写高效的CSS教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
- [PostCSS深入学习系列教程](http://www.w3cplus.com/PostCSS/postcss-deep-dive-preprocessing-with-precss.html)
- [大量 css3 hover效果动画](http://ianlunn.github.io/Hover/)
- [CSS3 知识库](http://lib.csdn.net/base/css3)
- [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
- [Flex布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html?bsh_bid=683103006)
- [纯css3 实现 loading动画](http://www.webhek.com/post/css-loaders.html)
- [用CSS绘制三角形](https://segmentfault.com/a/1190000002783179)
- [css3中单位px,em,rem,vh,vw,vmin,vmax的区别](http://blog.csdn.net/jyy_12/article/details/42557241)
- [前端不为人知的一面--前端冷知识集锦](http://www.cnblogs.com/Wayou/p/things_you_dont_know_about_frontend.html)
- [CSS文字两端对齐](http://blog.163.com/lgh_2002/blog/static/440175262013580153222/)
- [字体两端对齐，兼容ios和安卓系统](http://blog.csdn.net/happycat108/article/details/77095088)
- [CSS clip:rect矩形剪裁功能及一些应用介绍](http://www.zhangxinxu.com/wordpress/2011/04/css-clip-rect/)
- [CSS align-items 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
- [css单词断词、换行](http://www.alloyteam.com/2016/05/css-word-for-word-breaker-do-you-really-understand/)
- [巧用 mask-image 实现简单进度加载界面](http://www.cnblogs.com/vajoy/p/5095511.html)
- [CSS3 3D transform变换介绍](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)
- [CSS3图片摇摆动画](http://www.zzsck.org/js/picture/4097.html)
- [CSS3 pointer-events:none应用举例及扩展, 按钮点透事件](http://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript/)
- [pointer-events属性说明  MDN](https://developer.mozilla.org/cn/docs/Web/CSS/pointer-events)
- [解决IOS下不支持fixed的问题](http://www.alixixi.com/web/a/2014072993818.shtml)
- [css伪类元素和伪元素的用法详解](http://www.cnblogs.com/ghost-xyx/p/3763669.html)
- [小三角带边框带阴影的div——css实现效果](http://blog.csdn.net/swallowliyan/article/details/53639059)
- [用CSS让你的文字更有文艺范](http://www.vince.studio/2017/08/19/%E7%94%A8CSS%E8%AE%A9%E4%BD%A0%E7%9A%84%E6%96%87%E5%AD%97%E6%9B%B4%E6%96%87%E8%89%BA/)
- [实用的 CSS — 贝塞尔曲线(cubic-bezier)](https://segmentfault.com/a/1190000004618375)
- [clip-path 裁剪属性获取maker](https://bennettfeely.com/clippy/)
- [Css常用效果总结 — 快速查询笔记](http://www.qdfuns.com/notes/47654/f26eaa6148a3de8e8055bb6327b82055.html)

## Css项目中不常见属性汇总
1. 字体样式设置：<br>
	单词间距：word-spacing:8px;  字与字间距：letter-spacing: 1px; 
	设置开头缩进(两个字)：text-indent : 2em; 
2. 阻止按钮的默认行为：pointer-events: none;
	具体用法：pointer-events: auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
	实际应用案例： ① 提交页面，提交按钮点击后，添加这个样式属性（style="pointer-events"），来防止重复提交。
	② 一些层的绝对定位，覆盖按钮，穿透可以点击它。等等。
3. 简单的文字模糊效果
	
```
	p {
    color: transparent;
    text-shadow: #111 0 0 5px;
	}
```
<p style="color: transparent;text-shadow: #111 0 0 3px;">提交页面，提交按钮点击后，</p>

4. css 垂直居中 <br>
	方案1： 将父容器设置为 `display: table`, 然后将子元素设置为 `display: table-cell`, 然后加上 `vertical-align: middle`来实现。
	方案2：利用 `translate` 来实现水平垂直居中样式，需 IE9+。
	
```
	.center-vertical {
	    position: relative;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%); 
	}
```

5. 多重边框 <br>
	利用重复制定 `box-shadow` 来达到多个边框的效果
	
```
	/*CSS Border with Box-Shadow Example*/
	div {
	    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
	    height: 200px;
	    margin: 50px auto;
	    width: 400px
	}
```
<div style="width: 300px;height: 100px; margin: 50px auto; box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);"></div>

6. 取消chrome浏览器下input和textarea的默认样式(轮廓)    
	
	```
	input, button, select, textarea{
		outline: none;
	}
	textarea{
		resize: none;  // 文本框不可拖拽
	}
	```
7. 溢出显示省略号（...）：

	```
	// 单行文本
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	// 多行文本的溢出显示省略号（2行，可调整）
	p {
		 overflow : hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	```
8. 特殊选择器：`::selection` 用来改变浏览器网页选中中文的默认效果
9. css中文竖向排列的属性：`writing-mode`
10. 段落开头缩进 两个文字间距： `text-indent:2em`;
11. select 框右对齐的方法：
	```
	①、select {direction: rtl;}
	②、<select dir="rtl">
    		<option>Foo</option>    
	   </select>
	```
12. Firefox专属hack的写法: 解决 line-height 无法垂直居中问题

	```
	@-moz-document url-prefix(){
	    button{
	      padding-top:2px;
	    }
	  }
	```
13. 移动端 H5页面怎么样消除点击阴影

	```
	a,img,button,input,textarea{-webkit-tap-highlight-color:rgba(255,255,255,0);}
	```
14. ul列表用图片更换默认的圆点和序号

	```
	list-style: square inside url('list.png');
	```
15. pointer-events: none; 禁止事件穿透，即取消鼠标的点击事件的执行

