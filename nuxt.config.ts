import tailwindcss from "@tailwindcss/vite"
import { rollup as unwasm } from "unwasm/plugin"

/**
 * Общие модули, которые используются в любой среде.
 *
 * Сюда нужно помещать модули, которые находятся в `dependencies`
 */
const modules = [
  "@formkit/auto-animate/nuxt",
  "@nuxt/fonts",
  "@nuxt/icon",
  "@nuxt/image",
  "@nuxthub/core",
  "@nuxtjs/i18n",
  "@nuxtjs/seo",
  "@vueuse/nuxt",
  "nuxt-headlessui",
  "nuxt-shiki",
]

/**
 * Объединенный массив модулей, которые будут использоваться только в `DEV` среде.
 *
 * Сюда нужно помещать модули, которые находятся в `devDependencies`, и не будут установлены при сборке проекта.
 */
const devModules = [...modules, "@nuxt/test-utils/module"]

export default defineNuxtConfig({
  $development: { hub: { remote: "production" }, modules: devModules },
  $production: {
    modules,
    // TODO: Удалить после исправления https://github.com/pi0/nuxt-shiki/issues/41
    vite: { plugins: [unwasm({ esmImport: true })] },
  },
  $test: { modules: devModules, ogImage: { enabled: false } },
  compatibilityDate: "2024-07-19",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
    cookieStore: true,
    headNext: true,
    typedPages: true,
  },
  future: { compatibilityVersion: 4 },
  hub: { cache: true, database: true },
  i18n: {
    baseUrl: "https://exer7um.com",
    defaultLocale: "ru",
    experimental: {
      alternateLinkCanonicalQueries: true,
      typedOptionsAndMessages: "default",
      typedPages: true,
    },
    lazy: true,
    locales: [
      { code: "ru", file: "ru.yaml", language: "ru-RU", name: "Русский" },
      { code: "en", file: "en.yaml", language: "en-US", name: "English" },
    ],
    trailingSlash: true,
  },
  icon: { size: "24px" },
  image: {
    cloudinary: { baseURL: "https://res.cloudinary.com/exer7um/image/upload/" },
  },
  nitro: {
    // TODO: Удалить после исправления https://github.com/pi0/nuxt-shiki/issues/29
    experimental: { wasm: true },
    // TODO: Удалить после исправления https://github.com/pi0/nuxt-shiki/issues/45
    externals: { traceInclude: ["shiki/dist/core.mjs"] },
    preset: "cloudflare-pages",
  },
  ogImage: { zeroRuntime: true },
  robots: { blockNonSeoBots: true },
  router: { options: { scrollBehaviorType: "smooth" } },
  routeRules: {
    "*": { swr: true },
    "/about/": { prerender: true },
    "/contact-me/": { prerender: true },
  },
  runtimeConfig: { telegramChatId: "", telegramUrl: "" },
  shiki: {
    bundledLangs: ["vue-html"],
    bundledThemes: ["night-owl"],
    defaultLang: "vue-html",
    defaultTheme: "night-owl",
  },
  site: { name: "ExEr7um", trailingSlash: true, url: "https://exer7um.com" },
  vite: { plugins: [tailwindcss()] },
})
