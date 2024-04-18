/**
 * Функция для выставления тегов SEO на страницу.
 *
 * @param pageName - название страницы.
 */
export default function (pageName: string) {
  const { t } = useI18n()

  useSeoMeta({
    description: t(`descriptions.${pageName}`),
    title: t(`pages.${pageName}`),
  })
}
