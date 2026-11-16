/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly NUXT_TELEGRAM_CHAT_ID: number
  readonly NUXT_TELEGRAM_URL: string
}
