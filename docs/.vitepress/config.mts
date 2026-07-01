import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Knowledge',
  description: 'AI 面试题、学习资料与资源导航',
  base: '/AiKnowledge/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['CLAUDE.md', 'superpowers/**/*.md'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 面试题', link: '/interview/' },
      { text: '学习资料', link: '/learning/' },
      { text: '学习资源', link: '/resources/' },
      { text: '维护指南', link: '/guide/' }
    ],
    sidebar: {
      '/interview/': [
        {
          text: 'AI 面试题',
          items: [
            { text: '概览', link: '/interview/' },
            { text: '机器学习', link: '/interview/machine-learning' },
            { text: 'LLM', link: '/interview/llm' }
          ]
        }
      ],
      '/learning/': [
        {
          text: '学习资料',
          items: [
            { text: '概览', link: '/learning/' },
            { text: '基础知识', link: '/learning/foundations' },
            { text: 'LLM 应用', link: '/learning/llm-applications' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '学习资源',
          items: [
            { text: '概览', link: '/resources/' },
            { text: '工具清单', link: '/resources/tools' },
            { text: '论文与阅读', link: '/resources/papers' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '维护指南',
          items: [{ text: '站点维护', link: '/guide/' }]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cvenwu/AiKnowledge' }
    ],
    footer: {
      message: 'Built with VitePress.',
      copyright: 'Copyright © 2026-present AiKnowledge'
    }
  }
})
