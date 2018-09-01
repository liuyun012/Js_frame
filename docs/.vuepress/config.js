module.exports = {
  base: '/Js_frame/',
  dest: 'dist',
  title: 'Liuyun Blog',
  description: '个人在前端开发过程中整理的全栈知识',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    nav: [
      {text: '前端指南', link: '/guide/'},
      {text: '辅助工具', link: '/utils/'},
      {text: '全栈集锦', link: '/full-stack/'},
      {text: '其他', link: '/others/'},
      {text: 'xes-wxapp', link: 'https://liuyun012.github.io/xes-wxapp/' },
      {text: 'GitHub', link: 'https://github.com/liuyun012/Js_frame/'},
    ],
    sidebar: {
      '/guide/': guideSidebarConfig(),
      '/utils/': utilsSidebarConfig(),
      '/full-stack/': fullSidebarConfig(),
      '/others/': othersSidebarConfig(),
    }
  }
}

// 前端指南左侧导航
function guideSidebarConfig () {
  return [
    {
      title: '前端指南',
      collapsable: false,
      children: [
        '/guide/',
        '/guide/html-head',
        '/guide/前端编码规范整理',
        '/guide/常用正则表达式整理汇总',
        '/guide/jade语法',
      ]
    }
  ]
}

// 辅助工具左侧导航
function utilsSidebarConfig () {
  return [
    {
      title: '辅助工具',
      collapsable: false,
      children: [
        '/utils/',
        '/utils/markdown语法整理',
        '/utils/Charles的使用',
        '/utils/webpack教程及插件汇总',
        '/utils/Shell编程基础教程',
        '/utils/npm发包教程及组件按需加载的实现'
      ]
    }
  ]
}

// 全栈左侧导航
function fullSidebarConfig () {
  return [
    {
      title: '全栈集锦',
      collapsable: false,
      children: [
        '/full-stack/',
        '/full-stack/前端和后端注释文档生成',
        '/full-stack/PHP基础知识整理',
        '/full-stack/mysql数据库学习资料汇总',
        '/full-stack/http协议资料整理',
        '/full-stack/Express框架学习',
        '/full-stack/个人博客网站的搭建'
      ]
    }
  ]
}

// 其他页面左侧导航
function othersSidebarConfig () {
  return [
    {
      title: '其他',
      collapsable: false,
      children: [
        '/others/',
        '/others/chrome-plugs',
        '/others/前端面试问题及答案整理汇总',
        '/others/个人收藏资料集锦',
        '/others/日常杂项经验汇总'
      ]
    }
  ]
}

