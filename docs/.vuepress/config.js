module.exports = {
  base: '/Js_frame/',
  dest: 'dist',
  title: 'Liuyun Blog',
  description: '个人在前端开发过程中整理的前端知识',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '前端指南', link: '/guide/'},
      {text: '全栈', link: '/full-stack/'},
      {text: '其他', link: '/others/'},
      {text: 'xes-wxapp', link: 'https://liuyun012.github.io/xes-wxapp/' },
      {text: 'GitHub', link: 'https://github.com/liuyun012/Js_frame/'},
    ],
    sidebar: {
      '/guide/': guideSidebarConfig(),
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
        '/get-started/',
        '/html-source/',
        '/Javascript-source/'
      ]
    }
  ]
}

// 全栈左侧导航
function fullSidebarConfig () {
  return [
    {
      title: '全栈',
      collapsable: false,
      children: [
        '/interview-source/',
        '/utils/'
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
        '/others/'
      ]
    }
  ]
}

