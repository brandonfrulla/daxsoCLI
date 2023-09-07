export const SITE = {
  title: "Build Dax App",
  description: "The best way to start a full-stack, Web3 app.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "./images/Thumbnail.jpg",
    alt: "Create Web3 App: The best way to start a new crypto project.",
  },
  twitter: "haydenaylor",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
};

export const KNOWN_LANGUAGES = {
  // Add more languages here
  // sv: "Svenska",
  en: "English",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

export const GITHUB_EDIT_URL = `https://github.com/Dax911/daxsoCLI/tree/main/web`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/2UbYreY9bR`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "daxso-doc",
  appId: "7I8V9MJ9KJ",
  apiKey: "14937c13e906c36b2076548d895d487f",
};

export type OuterHeaders = "Create Web3 App" | "Usage" | "Deployment" | "Contributing";

export type SidebarItem<TCode extends KnownLanguageCode = KnownLanguageCode> = {
  text: string;
  link: `${TCode}/${string}`;
};

export type SidebarItemLink = SidebarItem["link"];

export type Sidebar = {
  [TCode in KnownLanguageCode]: {
    [THeader in OuterHeaders]?: SidebarItem<TCode>[];
  };
};
export const SIDEBAR: Sidebar = {
  // For Translations:
  // Keep the "outer headers" in English so we can match them.
  // Translate the "inner headers" to the language you're translating to.
  // Omit any files you haven't translated, they'll fallback to English.
  // Example:
  // sv: {
  //   "Create T3 App": [
  //     { text: "Introduktion", link: "sv/introduction" },
  //     { text: "Installation", link: "sv/installation" },
  //   ],
  //   Usage: [{ text: "Miljövariabler", link: "sv/usage/env-variables" }],
  // },

  en: {
    "Create Web3 App": [
      { text: "Introduction", link: "en/introduction" },
      { text: "Why Dax.So?", link: "en/why" },
      { text: "Getting Started", link: "en/start" },
      { text: "FAQ", link: "en/faq" },
    ],
    Usage: [
      { text: "First Steps", link: "en/usage/first-steps" },
      { text: "Contracts", link: "en/usage/contract" },
    ],
    Deployment: [
      { text: "Vercel", link: "en/deployment/vercel" },
      { text: "Infura", link: "en/deployment/infura" },
    ],
    Contributing: [
      { text: "Contributing", link: "en/contrib/contributing" },
      { text: "Code Generation", link: "en/contrib/codegen" },
    ],
  },
  
  
};

export const SIDEBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "en">,
  Record<OuterHeaders, string>
> = {
  
  // Translate the sidebar's "outer headers" here
  // sv: {
  //   "Create T3 App": "Create T3 App",
  //   Usage: "Användarguide",
  //   Deployment: "Deployment",
  // },
  
};
