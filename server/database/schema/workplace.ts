import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToWorkplaces } from "./tagsToWorkplaces"

export const workplaces = sqliteTable("workplaces", {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  descriptionEN: text("description_en").notNull(),
  descriptionRU: text("description_ru").notNull(),
  endDate: integer("end_date", { mode: "timestamp" }),
  id: integer("id").primaryKey({ autoIncrement: true }),
  logo: text("logo").notNull(),
  startDate: integer("start_date", { mode: "timestamp" }).notNull(),
  titleEN: text("title_en").notNull(),
  titleRU: text("title_ru").notNull(),
})

export type Workplace = typeof workplaces.$inferSelect

export const workplacesRelations = relations(workplaces, ({ many }) => ({
  tags: many(tagsToWorkplaces),
}))
