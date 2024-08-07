import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fitness Road",
  description: "写给程序员的健身指北",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/intro" },
    ],

    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "简介", link: "/guides/intro" },
          { text: "减肥", link: "/guides/slimming" },
          { text: "增肌", link: "/guides/toning" },
        ],
      },
      {
        text: "Recipes",
        items: [
          { text: "动作篇", link: "/recipes/动作篇" },
          { text: "心态篇", link: "/recipes/心态篇" },
          { text: "指标篇", link: "/recipes/指标篇" },
          { text: "激励篇", link: "/recipes/激励篇" },
          { text: "饮食篇", link: "/recipes/饮食篇" },
          { text: "药物篇", link: "/recipes/药物篇" },
        ],
      },
      {
        text: "Player",
        items: [
          { text: "hylarucoder", link: "/players/hylarucoder" },
          { text: "vincent", link: "/players/vincent" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/hylarucoder/the-road-to-fitness",
      },
    ],
  },
});
