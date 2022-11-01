import { defineUserConfig  } from 'vuepress'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  title: '开发指南',
  description: '文档存储，知识库，笔记，指南',

  //icon
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  // 主题
  theme,

  shouldPrefetch: false,
})
