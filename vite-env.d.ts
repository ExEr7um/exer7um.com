/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NUXT_HUB_PROJECT_SECRET_KEY: string
  readonly NUXT_HUB_PROJECT_URL: string
  readonly NUXT_HUB_REMOTE?: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
