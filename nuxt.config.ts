export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    // Если запускается билд, то @nuxt/test-utils не нужен
    process.env.NODE_ENV === "production"
      ? () => undefined
      : "@nuxt/test-utils/module",
  ],
})
