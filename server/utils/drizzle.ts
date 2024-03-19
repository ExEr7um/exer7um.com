import { drizzle } from "drizzle-orm/d1"

import * as personalProjectsSchema from "../database/schema/personalProject"
import * as tagsSchema from "../database/schema/tag"
import * as tagsToPersonalProjects from "../database/schema/tagsToPersonalProjects"

export const tables = {
  ...tagsSchema,
  ...personalProjectsSchema,
  ...tagsToPersonalProjects,
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
