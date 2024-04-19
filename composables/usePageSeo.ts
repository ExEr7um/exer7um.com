/**
 * Функция для выставления тегов SEO на страницу.
 *
 * @param pageName - название страницы.
 */
export default function (pageName: string) {
  const { t } = useI18n()

  const title = t(`pages.${pageName}`)
  const description = t(`descriptions.${pageName}`)

  useSeoMeta({
    description,
    title,
    twitterDescription: description,
    twitterTitle: title,
  })

  defineOgImageComponent("Nuxt", {
    headline: "ExEr7um",
  })
}
