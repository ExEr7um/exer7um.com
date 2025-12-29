import removeTestId from "./app/utils/removeTestId"

/**
 * Общие модули, которые используются в любой среде.
 *
 * Сюда нужно помещать модули, которые находятся в `dependencies`
 */
const modules = [
  "@nuxt/image",
  "@nuxthub/core",
  "@nuxtjs/i18n",
  "@nuxtjs/seo",
  "@vueuse/nuxt",
  "nuxt-shiki",
  "@nuxt/ui",
]

/**
 * Объединенный массив модулей, которые будут использоваться только в `DEV` среде.
 *
 * Сюда нужно помещать модули, которые находятся в `devDependencies`, и не будут установлены при сборке проекта.
 */
const devModules = [...modules, "nuxt-mcp"]

/**
 * Объединенный массив модулей, которые будут использоваться только в `TEST` среде.
 */
const testModules = [...modules, "@nuxt/test-utils/module"]

export default defineNuxtConfig({
  $development: {
    modules: devModules,
    nitro: { experimental: { tasks: true } },
  },
  $production: {
    modules,
    vite: {
      vue: {
        template: { compilerOptions: { nodeTransforms: [removeTestId] } },
      },
    },
  },
  $test: {
    modules: testModules,
    ogImage: { enabled: false },
    sitemap: { enabled: false },
    ui: { colorMode: false },
  },
  compatibilityDate: "2025-07-16",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
    typedPages: true,
    typescriptPlugin: true,
    viteEnvironmentApi: true,
  },
  hub: { cache: true, db: "sqlite" },
  i18n: {
    baseUrl: "https://exer7um.com",
    defaultLocale: "ru",
    experimental: { typedOptionsAndMessages: "default" },
    locales: [
      { code: "ru", file: "ru.yaml", language: "ru-RU", name: "Русский" },
      { code: "en", file: "en.yaml", language: "en-US", name: "English" },
    ],
    trailingSlash: true,
  },
  image: {
    cloudinary: { baseURL: "https://res.cloudinary.com/exer7um/image/upload/" },
  },
  imports: { presets: ["vitest"] },
  linkChecker: { enabled: false },
  nitro: {
    cloudflare: { deployConfig: true, nodeCompat: true },
    preset: "cloudflare-module",
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
  sitemap: { zeroRuntime: true },
  ui: { experimental: { componentDetection: true } },
})
