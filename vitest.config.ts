import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    coverage: {
      provider: "istanbul",
    },
    environment: "nuxt",
    globals: true,
    sequence: {
      concurrent: true,
    },
    setupFiles: ["tests/setup.ts"],
  },
})
