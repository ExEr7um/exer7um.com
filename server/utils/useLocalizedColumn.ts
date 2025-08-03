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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Ошибка в TS, не использую expect-error, так как она пропадает в CI
  const locale = getHeaderLocale(event, { lang: "ru" })

  return (column + locale.baseName.toUpperCase()) as TReturn
}
