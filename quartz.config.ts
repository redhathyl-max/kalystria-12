import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kalystria 12 - Grimório",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "redhathyl-max.github.io/kalystria-12",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel Decorative", // Medieval, ornamentado — perfeito para títulos
        body: "Crimson Text",        // Serifada clássica, lembra manuscritos antigos
        code: "Courier Prime",       // Monoespaçada com toque vintage
      },
      colors: {
        lightMode: {
          light: "#f5ead8",          // Fundo: Pergaminho
          lightgray: "#ddd0b8",      // Bordas: Pergaminho escurecido
          gray: "#9c8672",           // Texto secundário: Sépia
          darkgray: "#3d2b1f",       // Texto principal: Tinta marrom
          dark: "#1a0f07",           // Títulos: Tinta preta-café
          secondary: "#8b4513",      // Links: Marrom sela
          tertiary: "#a0522d",       // Hover: Sienna
          highlight: "rgba(139, 69, 19, 0.12)",
          textHighlight: "#c8a97088",
        },
        darkMode: {
          light: "#110e0b",          // Fundo: Café quase preto, como tinta seca
          lightgray: "#2e2318",      // Bordas: Couro escuro
          gray: "#7a6652",           // Texto secundário: Marrom pergaminho
          darkgray: "#c9b99a",       // Texto principal: Papel amarelado
          dark: "#e8d8b8",           // Títulos: Pergaminho claro
          secondary: "#b8732a",      // Links: Âmbar enferrujado
          tertiary: "#8b5e2a",       // Hover: Bronze oxidado
          highlight: "rgba(184, 115, 42, 0.12)", // Destaque: Brilho âmbar sutil
          textHighlight: "#3b1f0a88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config