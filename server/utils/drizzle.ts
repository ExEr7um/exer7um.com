import { drizzle } from "drizzle-orm/d1"
export { and, eq, or, sql } from "drizzle-orm"

/**
 * Функция для обращения к Drizzle ORM.
 *
 * @returns методы для работы с Drizzle ORM.
 */
export function useDrizzle() {
  return drizzle(hubDatabase())
}
