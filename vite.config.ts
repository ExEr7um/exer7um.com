import {
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  defineStagedConfig,
} from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig({
    ignorePatterns: ["**/migrations/**", "**/mcp.json"],
    sortTailwindcss: { stylesheet: "./app/assets/css/main.css" },
  }),
  lint: defineLintConfig(),
  staged: defineStagedConfig({}, { eslint: "*.{vue,js,jsx,cjs,mjs,ts,json,yaml}" }),
})
