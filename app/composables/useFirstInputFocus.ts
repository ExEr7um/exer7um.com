/**
 * Функция для фокусировки на первом найденном инпуте на странице
 *
 * @param customQuery - кастомный запрос для querySelector
 */
export default function (customQuery?: string) {
  onMounted(() => {
    /** Первый найденный инпут */
    const input = document.querySelector<HTMLInputElement>(
      customQuery ?? "input"
    )

    // Фокусируемся на инпуте
    input?.focus()
  })
}
