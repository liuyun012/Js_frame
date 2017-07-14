# 常用HTML head头标签`<meta>`整理汇总
head头标签整理汇总--移动端和PC端 by Qzx
## `<meta>`元素简介
##### 概要
> 标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。 —— W3School

##### 必要的属性
属性 | 值 | 描述
----|----|----
content |  some text | 定义与http-equiv或name属性相关的元信息
##### 可选属性
属性 |  值  | 描述
----|------|----
http-equiv | content-type / expire / refresh / set-cookie  | 把 content 属性关联到HTTP头部。
name | author / description / keywords / generator / revised / others  | 把 content 属性关联到一个名称。
content | some text  | 定义用于翻译 content 属性值得格式
## 常用meta整理 
#### 一、网页相关

```
// 申明编码
<meta charset='utf-8' />

// 转码申明：用百度打开网页可能会对其转码，避免转码时可添加：
<meta http-equiv="Cache-Control" content="no-siteapp">

// 站点适配：主要用于PC-手机页的对应关系
<meta name="mobile-agent" content="format=[wml|xhtml|html5]; url=url">
<!-- [wml|xhtml|html5]根据手机页的协议语言，选择其中一种；url="url" 后者代表当前PC页所对应的手机页URL，两者必须是一一对应关系。 -->

// 禁止浏览器从本地计算机的缓存中访问页面内容：设定后，访问者将无法脱机浏览。
<meta http-equiv="Pragma" content="no-cache">

// 优先使用 IE 最新版本和 Chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 关于X-UA-Compatible -->
<meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->
<meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->

// 浏览器内核标注：国内浏览器很多都是双内核（webkit和Trident）
<meta name="renderer" content="webkit|ie-comp|ie-stand" />

```

#### 二、 移动设备
<b>viewport</b>: 能够优化移动浏览器的显示，如果不是响应式网站，不要使用 initial-scale或者禁用缩放。大部分4.7-5寸设备的viewport宽设为360px; 5.5寸设备设为400px, iphone6设为375px; iphone6 plus设为414px。

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->
```
##### 参数说明
	1. width: 宽度（数值/device-width）(范围从 200 到 10,000，默认是980像素)
	2. height: 高度（数值/device-height）(范围从 223 到 10,000)
	3. initial-scale: 初始的缩放比例（范围从 >0 到 10）
	4. minimum-scale: 允许用户缩放到的最小比例
	5. maximum-scale: 允许用户缩放到的最大比例
	6. user-scalable: 用户是否可以手动缩小(no,yes)
   <b>注意：</b>很多人使用initial-sacle=1到非响应式网站上，会让网站以100%宽度渲染，用户需手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或者maximum-scale=1，则用户将不能放大/缩小网页来查看全部内容。

```
// WebApp全屏模式：伪装app，离线应用。
<meta name="apple-mobile-web-app-capable" content="yes" /> <!-- 启用全屏 WebApp 全屏模式 -->

// 隐藏状态栏/设置状态栏颜色：只有在开启 WebApp 全屏模式时生效。content的值为 default| black| black-translucent 。
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

// 添加到主屏后的标题
<meta name="apple-mobile-web-app-title" content="标题"/>
```
##### 其他常用

```
// 忽略数字自动识别为电话号码
<meta content="telephone=no" name="format-detection" />

// 忽略识别邮箱
<meta content="email=no" name="format-detection" />

// 添加智能 App 广告条 Smart App Banner：告诉浏览器这个网站对应的app，并在页面上显示下载banner(如下图)。
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" /> 

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

```
#### 三、SEO优化

```
// 页面关键词: 描述该网页内容的一组唯一的关键字，不超过874个字符
<meta name="keywords" content="your tags" />

// 页面描述：每个网页都应该有一个不超过150个字符切准确反映网页内容的描述标签。
<meta name="description" content="150 words" />

// 搜索引擎索引方式：robotterms是一组使用逗号(,)分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。确保正确使用nofollow和noindex属性值。
<meta name="robots" content="index,follow" /> 
<!--
    all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询；
    noindex：文件将不被检索；
    nofollow：页面上的链接不可以被查询。
 -->

// 页面重定向和刷新：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。
<meta http-equiv="refresh" content="0;url=" />

// 其他
<meta name="author" content="author name" /> <!-- 定义网页作者 -->
<meta name="google" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="verify" content="index,follow" />

```








