import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["**/*.spec.ts"],
    setupFiles: ["tests/setup.ts"],
  },
})
