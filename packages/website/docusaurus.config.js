// @ts-check
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const { ProvidePlugin } = require("webpack");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bento DS",
  tagline: "An extensible and customizable Design System for React",
  url: "https://developer.bento-ds.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "buildo",
  projectName: "bento-design-system",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/buildo/bento-design-system/tree/main/packages/website/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        docsRouteBasePath: "/",
      },
    ],
  ],
  plugins: [
    () => ({
      name: "webpack-config-plugin",
      configureWebpack(_config, isServer) {
        return {
          mergeStrategy: {
            plugins: "append",
            resolve: "append",
          },
          plugins: isServer
            ? undefined
            : [
                // These plugins are needed to make @babel/generate work in browser
                new ProvidePlugin({ process: "process/browser.js" }),
                new ProvidePlugin({
                  Buffer: ["buffer", "Buffer"],
                }),
              ],
          resolve: isServer
            ? undefined
            : {
                // Necessary for @babel/standlone to work
                fallback: {
                  path: false,
                  fs: false,
                },
              },
        };
      },
    }),
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: ["../bento-design-system/src/index.ts"],
        global: true,
        parserOptions: {
          // @ts-ignore
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }

            return true;
          },
          shouldExtractLiteralValuesFromEnum: true,
          shouldRemoveUndefinedFromOptional: true,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        logo: {
          alt: "Bento DS",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            type: "doc",
            docId: "Governance/governance",
            position: "left",
            label: "Governance",
          },
          {
            href: "https://github.com/buildo/bento-design-system",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Twitter",
            href: "https://twitter.com/buildoHQ",
          },
          {
            label: "GitHub",
            href: "https://github.com/buildo/bento-design-system",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} buildo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
