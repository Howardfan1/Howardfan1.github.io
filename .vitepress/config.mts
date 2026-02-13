import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Howard's Blog",
  description: '个人博客 - 分享笔记与文章',
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#5b6cf0' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: "Howard's Blog" }],
    ['meta', { name: 'og:description', content: '个人博客 - 分享笔记与文章' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/howardfan1' },
    ],

    footer: {
      message: '用 ❤️ 和 VitePress 构建',
      copyright: '© 2026 Howard',
    },

    outline: {
      label: '目录',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭',
            },
          },
        },
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
