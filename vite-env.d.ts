/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NUXT_HUB_PROJECT_SECRET_KEY: string
  readonly NUXT_HUB_PROJECT_URL: string
  readonly NUXT_HUB_REMOTE?: boolean
  readonly NUXT_TELEGRAM_CHAT_ID: number
  readonly NUXT_TELEGRAM_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
