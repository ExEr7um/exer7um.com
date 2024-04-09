/**
 * Общие модули, которые используются в любой среде.
 *
 * Сюда нужно помещать модули, которые находятся в `dependencies`
 */
const modules = [
  "@formkit/auto-animate/nuxt",
  "@nuxt/fonts",
  "@nuxt/image",
  "@nuxthub/core",
  "@nuxtjs/i18n",
  "@nuxtjs/tailwindcss",
  "@vueuse/nuxt",
  "nuxt-headlessui",
  "nuxt-icon",
  "nuxt-shiki",
]

/**
 * Объединенный массив модулей, которые будут использоваться только в `DEV` среде.
 *
 * Сюда нужно помещать модули, которые находятся в `devDependencies`, и не будут установлены при сборке проекта.
 */
const devModules = [...modules, "@nuxt/eslint", "@nuxt/test-utils/module"]

export default defineNuxtConfig({
  $development: {
    modules: devModules,
  },
  $production: {
    modules,
  },
  $test: {
    modules: devModules,
  },
  appConfig: {
    nuxtIcon: {
      size: "24px",
    },
  },
  devtools: {
    enabled: true,
  },
  experimental: {
    componentIslands: {
      selectiveClient: "deep",
    },
    cookieStore: true,
    headNext: true,
    typedPages: true,
  },
  fonts: {
    experimental: {
      addPreloadLinks: true,
    },
  },
  hub: {
    cache: true,
    database: true,
  },
  i18n: {
    defaultLocale: "ru",
    langDir: "assets/lang/",
    lazy: true,
    locales: [
      {
        code: "ru",
        file: "ru.json",
        iso: "ru-RU",
        name: "Русский",
      },
      {
        code: "en",
        file: "en.json",
        iso: "en-US",
        name: "English",
      },
    ],
    trailingSlash: true,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/exer7um/image/upload/",
    },
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
    },
  },
  routeRules: {
    "/contact-me/": {
      prerender: true,
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  runtimeConfig: {
    telegramChatId: "",
    telegramUrl: "",
  },
  shiki: {
    bundledLangs: ["vue-html"],
    bundledThemes: ["night-owl"],
    defaultLang: "vue-html",
    defaultTheme: "night-owl",
  },
  tailwindcss: {
    viewer: false,
  },
})
