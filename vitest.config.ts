import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    sequence: {
      concurrent: true,
    },
    setupFiles: ["tests/setup.ts"],
  },
})
