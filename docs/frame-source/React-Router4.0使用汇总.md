React-Router4.0 学习过程及项目使用问题及资料整理
## React-Router4.0 简介及方法

React Router 是完整的 React 路由解决方案

## React-Router 参考资料网址汇总
- [React-Router github](https://github.com/ReactTraining/react-router)
- [React Router V4 中文文档](https://github.com/react-translate-team/react-router-CN)
- [React Router V2 中文文档](https://react-guide.github.io/react-router-cn/)
- [React Router2.0 使用教程 -- 阮一峰](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
- [react-router 示例库](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)

## React-Router4.0 日常使用及注意点
- 基本使用

```
import {
  BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  MemoryRouter
} from 'react-router-dom'
``` 
- 获取 Url参数

```
<Route path="/:id" component={Child}/>
this.props.params.id
```
- 未匹配(404)页面

```
<Route component={NoMatch}/>
```
- 过渡动画

```
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
<ReactCSSTransitionGroup
	    transitionName="fade"
	    transitionEnterTimeout={300}
	    transitionLeaveTimeout={300}
	  >
```
- 

## 项目遇到的问题及解决方案
- 在 a 标签的点击事件中进行页面跳转并携带参数

```
this.props.history.push({
        pathname: '/pay',
        state: { isTop: true }
      });
```

