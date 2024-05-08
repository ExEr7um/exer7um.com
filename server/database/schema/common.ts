import type { SQLiteColumnBuilderBase } from "drizzle-orm/sqlite-core"

import { sql } from "drizzle-orm"
import { integer, text } from "drizzle-orm/sqlite-core"

/** Поля таблицы */
type TableFields = Record<string, SQLiteColumnBuilderBase>

/**
 * Авто-увеличивающееся `ID` элемента.
 *
 * Добавляет поле `id`.
 */
export const id = {
  id: integer("id").primaryKey({ autoIncrement: true }),
} as const satisfies TableFields

/**
 * Локализованный заголовок.
 *
 * Добавляет поля `titleRU` и `titleEN`.
 */
export const localizedTitle = {
  titleEN: text("title_en").notNull(),
  titleRU: text("title_ru").notNull(),
} as const satisfies TableFields

/**
 * Локализованное описание.
 *
 * Добавляет поля `descriptionRU` и `descriptionEN`.
 */
export const localizedDescription = {
  descriptionEN: text("description_en").notNull(),
  descriptionRU: text("description_ru").notNull(),
} as const satisfies TableFields

/**
 * Дата создания.
 *
 * Добавляет поле `createdAt`.
 */
export const createdAt = {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
} as const satisfies TableFields

/**
 * Базовая карточка. Добавляет поля:
 * - Локализованный заголовок
 * - Локализованное описание
 * - Дата создания
 */
export const baseCard = {
  ...createdAt,
  ...localizedDescription,
  ...localizedTitle,
  ...id,
} as const satisfies TableFields
