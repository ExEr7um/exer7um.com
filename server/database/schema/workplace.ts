import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToWorkplaces } from "./tagsToWorkplace"

export const workplaces = sqliteTable("workplaces", {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  descriptionEN: text("description_en").notNull(),
  descriptionRU: text("description_ru").notNull(),
  endDate: text("end_date"),
  id: integer("id").primaryKey({ autoIncrement: true }),
  logo: text("logo").notNull(),
  startDate: text("start_date").notNull(),
  titleEN: text("title_en").notNull(),
  titleRU: text("title_ru").notNull(),
})

export type Workplace = typeof workplaces.$inferSelect

export const workplacesRelations = relations(workplaces, ({ many }) => ({
  tags: many(tagsToWorkplaces),
}))
