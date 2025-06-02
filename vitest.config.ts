import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  experimental: { enableNativePlugin: false },
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["**/*.spec.ts"],
    setupFiles: ["tests/setup.ts"],
  },
})
