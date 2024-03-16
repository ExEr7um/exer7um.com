declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_HUB_PROJECT_SECRET_KEY: string
      NUXT_HUB_PROJECT_URL: string
      NUXT_HUB_REMOTE?: boolean
    }
  }
}

export {}
