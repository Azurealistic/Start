// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "East Brunswick, New Jersey",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UTC",
      timezone: "UTC",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      k: ["https://kagi.com/search?q=", "Kagi"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://kagi.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "fanfiction",
              url: "https://archiveofourown.org",
              icon: "brand-ao3",
              icon_color: palette.green,
            },
            {
              name: "keybr",
              url: "https://www.keybr.com",
              icon: "keyboard",
              icon_color: palette.peach,
            },
            {
              name: "hackforums",
              url: "https://hackforums.net",
              icon: "skull",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "outlook",
              url: "https://outlook.office.com",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "onedrive",
              url: "https://onedrive.live.com",
              icon: "brand-onedrive",
              icon_color: palette.peach,
            },
            {
              name: "teams",
              url: "https://teams.microsoft.com",
              icon: "brand-teams",
              icon_color: palette.red,
            },
            {
              name: "todo",
              url: "https://to-do.office.com",
              icon: "checklist",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-ycombinator",
              icon_color: palette.green,
            },
            {
              name: "the verge",
              url: "https://www.theverge.com",
              icon: "news",
              icon_color: palette.peach,
            },
            {
              name: "bbc",
              url: "https://www.bbc.com/news",
              icon: "world",
              icon_color: palette.red,
            },
            {
              name: "ars technica",
              url: "https://arstechnica.com",
              icon: "cpu",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "vibes",
      background_url: "src/img/banners/banner_13.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.green,
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.blue,
            },
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.green,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.peach,
            },
            {
              name: "gog",
              url: "https://www.gog.com",
              icon: "device-gamepad-2",
              icon_color: palette.red,
            },
            {
              name: "itch.io",
              url: "https://itch.io",
              icon: "brand-itch",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "crunchyroll",
              url: "https://www.crunchyroll.com",
              icon: "spiral",
              icon_color: palette.peach,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "mdn",
              url: "https://developer.mozilla.org",
              icon: "brand-firefox",
              icon_color: palette.red,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "book-2",
              icon_color: palette.blue,
            },
            {
              name: "godbolt",
              url: "https://godbolt.org",
              icon: "brand-cpp",
              icon_color: palette.mauve,
            },
            {
              name: "regexr",
              url: "https://regexr.com",
              icon: "regex",
              icon_color: palette.teal,
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "asterisk",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://chat.openai.com",
              icon: "brand-openai",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "sparkles",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "brand-leetcode",
              icon_color: palette.green,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.peach,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.red,
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "code",
              icon_color: palette.green,
            },
            {
              name: "xe's blog",
              url: "https://xeiaso.net",
              icon: "terminal-2",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);