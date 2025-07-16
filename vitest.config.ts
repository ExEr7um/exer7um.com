import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  experimental: { enableNativePlugin: false },
  test: {
    environment: "nuxt",
    globals: true,
    include: ["**/*.spec.ts"],
    setupFiles: ["tests/setup.ts"],
  },
})
