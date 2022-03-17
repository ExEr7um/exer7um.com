export default {
  // Для тестирования в локальной сети
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'exer7um.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'YXzxEGAF3ahAAqmvvXPdeFxApY0wrxeFvTq2JXASDyE',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Я фронтенд-разработчик из Москвы, пишу сайты на Nuxt, делаю дизайн в Sketch.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/shared', '~/components/projects'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/strapi',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://exer7um.herokuapp.com',
    https: true,
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
        iso: 'ru-RU',
        file: 'ru.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
    ],
    baseUrl: 'https://exer7um.github.io',
    lazy: true,
    langDir: 'assets/lang/',
    defaultLocale: 'ru',
  },

  robots: {
    UserAgent: '*',
    Disallow: '/admin',
  },

  strapi: {
    url: 'http://localhost:1337/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
