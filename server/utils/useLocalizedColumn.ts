import type { H3Event } from "h3"

import { getHeaderLocale } from "@intlify/h3"

/**
 * Функция для получения локализированного названия колонки.
 *
 * @template TReturn - тип возвращаемого значения.
 * @param column - название колонки.
 * @param event - H3 ивент.
 * @returns локализированное название колонки
 */
export default function <TReturn>(column: string, event: H3Event): TReturn {
  // @ts-expect-error - неправильно обрабатывается тип импорта
  const locale = getHeaderLocale(event, { lang: "ru" })

  return (column + locale.baseName.toUpperCase()) as TReturn
}
