/**
 * Функция для выставления тегов SEO на страницу.
 *
 * @param pageName - название страницы.
 * @returns заголовок и описание страницы.
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

  return { description, title }
}
