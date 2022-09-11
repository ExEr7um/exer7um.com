import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
    subsets: "cyrillic",
  },
  i18n: {
    defaultLocale: "ru",
    langDir: "assets/lang/",
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
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],
  tailwindcss: {
    viewer: false,
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
