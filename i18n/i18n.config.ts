import russianPluralization from "./utils/russianPluralization"

export default defineI18nConfig(() => ({
  pluralRules: {
    ru: russianPluralization,
  },
}))
