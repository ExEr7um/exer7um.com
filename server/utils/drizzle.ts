import { drizzle } from "drizzle-orm/d1"

import * as tagsSchema from "../database/schema/tag"

export const tables = {
  ...tagsSchema,
}

/**
 * Функция для обращения к Drizzle ORM.
 *
 * @returns методы для работы с Drizzle ORM.
 */
export function useDrizzle() {
  return drizzle(hubDatabase(), {
    schema: tables,
  })
}

// Экспортируем методы Drizzle для автоимпорта
export { and, eq, or, sql } from "drizzle-orm"
