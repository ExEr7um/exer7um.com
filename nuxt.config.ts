import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
    subsets: "cyrillic",
  },
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    langDir: "assets/lang/",
    defaultLocale: "ru",
    locales: [
      {
        name: "Русский",
        code: "ru",
        iso: "ru-RU",
        file: "ru.json",
      },
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
  },
})
