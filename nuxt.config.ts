export default defineNuxtConfig({
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
      selectiveClient: true,
    },
    cookieStore: true,
    headNext: true,
    typedPages: true,
  },
  fonts: {
    experimental: {
      addPreloadLinks: true,
    },
    families: [
      {
        name: "Gill Sans",
        provider: "local",
        weights: [400, 700],
      },
    ],
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
  modules: [
    "@formkit/auto-animate/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "nuxt-icon",
    // Если запускается билд, то @nuxt/test-utils не нужен
    process.env.NODE_ENV === "production"
      ? () => undefined
      : "@nuxt/test-utils/module",
  ],
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  tailwindcss: {
    viewer: false,
  },
})
