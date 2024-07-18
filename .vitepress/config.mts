import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fitness Road",
  description: "写给程序员的健身指北",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides' },
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '缘起', link: '/guides' },
        ]
      },
      {
        text: 'Recipes',
        items: [
          { text: '动作篇.md', link: '/recipes/动作篇.md' },
          { text: '心态篇', link: '/recipes/心态篇' },
          { text: '指标篇.md', link: '/recipes/指标篇.md' },
          { text: '激励篇.md', link: '/recipes/激励篇.md' },
          { text: '饮食篇.md', link: '/recipes/饮食篇.md' }
        ]
      },
      {
        text: 'Player',
        items: [
          { text: 'hylarucoder', link: '/players/hylarucoder' },
          { text: 'vincent', link: '/players/vincent' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
