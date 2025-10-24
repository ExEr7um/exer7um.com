import { defineVitestProject } from "@nuxt/test-utils/config"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: [
      await defineVitestProject({
        test: {
          environment: "nuxt",
          include: ["**/*.spec.ts"],
          name: "unit",
          setupFiles: ["tests/setup.ts"],
        },
      }),
    ],
  },
})
