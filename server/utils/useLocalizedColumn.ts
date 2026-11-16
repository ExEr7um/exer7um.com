import type { RequestEvent } from "nuxt/server"

import { getRequestHeader } from "nuxt/server"

/**
 * Функция для получения локализированного названия колонки.
 *
 * @template TReturn - тип возвращаемого значения.
 * @param column - название колонки.
 * @param event - событие запроса.
 * @returns локализированное название колонки
 */
export default function <TReturn>(column: string, event: Pick<RequestEvent, "req">): TReturn {
  /** Первый язык из хедера `Accept-Language` */
  const tag = getRequestHeader(event, "accept-language")?.split(",", 1)[0]?.split(";", 1)[0]?.trim()
  const language = tag ? new Intl.Locale(tag).language : "ru"

  return (column + language.toUpperCase()) as TReturn
}
