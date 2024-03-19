import { drizzle } from "drizzle-orm/d1"

import * as personalProjectsSchema from "../database/schema/personalProject"
import * as tagsSchema from "../database/schema/tag"

export const tables = {
  ...tagsSchema,
  ...personalProjectsSchema,
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
export { and, asc, desc, eq, or } from "drizzle-orm"
