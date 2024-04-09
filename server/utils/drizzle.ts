import { drizzle } from "drizzle-orm/d1"

import * as personalProjectsSchema from "../database/schema/personalProject"
import * as projectsSchema from "../database/schema/project"
import * as tagsSchema from "../database/schema/tag"
import * as tagsToPersonalProjects from "../database/schema/tagsToPersonalProjects"
import * as tagsToProjects from "../database/schema/tagsToProjects"

export const tables = {
  ...projectsSchema,
  ...tagsToProjects,
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
  // @ts-expect-error - при запуске typecheck не определяется тип
  return drizzle(hubDatabase(), {
    schema: tables,
  })
}

// Экспортируем методы Drizzle для автоимпорта
export { and, asc, desc, eq, or } from "drizzle-orm"
