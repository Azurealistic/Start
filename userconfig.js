// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-10.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "outlook",
              url: "https://outlook.live.com/mail/",
              icon: "brand-windows",
              icon_color: palette.blue,
            },
            {
              name: "search",
              url: "https://kagi.com/",
              icon: "search",
              icon_color: palette.green,
            },
            {
              name: "fanfiction",
              url: "https://archiveofourown.org/",
              icon: "file-text",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/azurealistic",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "keybr",
              url: "https://www.keybr.com/",
              icon: "keyboard",
              icon_color: palette.blue,
            },
            {
              name: "hn",
              url: "https://news.ycombinator.com",
              icon: "news",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "crunchyroll",
              url: "https://www.crunchyroll.com/",
              icon: "spiral",
              icon_color: palette.yellow,
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "music",
              icon_color: palette.red,
            },
            {
              name: "hackforums",
              url: "https://hackforums.net/",
              icon: "terminal",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "north-star",
              icon_color: palette.peach,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "sparkles",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.teal);