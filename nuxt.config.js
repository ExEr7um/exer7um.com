export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'exer7um.github.io',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:5000',
  },

  optimizedImages: {
    optimizeImages: true,
  },

  webfontloader: {
    google: {
      families: ['Inter:400,500,700'],
    },
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'ru',
    },
    locales: [
      {
        name: 'Русский',
        code: 'ru',
        file: 'ru.js',
      },
      {
        name: 'English',
        code: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'assets/lang/',
    defaultLocale: 'ru',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
