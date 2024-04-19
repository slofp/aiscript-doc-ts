import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "AiScript Documentation",
    tagline: "AiScriptの非公式ドキュメント",

    // Set the production url of your site here
    url: "https://slofp.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/aiscript-doc-ts/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "slofp", // Usually your GitHub org/user name.
    projectName: "aiscript-doc-ts", // Usually your repo name.
    deploymentBranch: "gh-pages",

    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "ja",
        locales: ["ja", "en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    lastVersion: "current",
                    versions: {
                        current: {
                            label: "UnRelease",
                        },
                    },
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "dark",
        },
        navbar: {
            hideOnScroll: true,
            title: "AiScript Documentation",
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSide",
                    position: "left",
                    label: "ドキュメント",
                },
                // なにかほかに追加する要素があれば追加する
                {
                    type: "docSidebar",
                    sidebarId: "apiDocsSide",
                    position: "left",
                    label: "APIリファレンス",
                },
                /*{
					type: 'localeDropdown',
					position: 'right'
				},*/
                {
                    type: "docsVersionDropdown",
                    position: "right",
                },
                {
                    href: "https://github.com/aiscript-dev/aiscript",
                    label: "AiScript GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} slofp`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.jettwaveDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
