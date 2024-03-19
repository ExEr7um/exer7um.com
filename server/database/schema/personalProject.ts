import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToPersonalProjects } from "./tagsToPersonalProjects"

export const personalProjects = sqliteTable("personal_projects", {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  descriptionEN: text("description_en").notNull(),
  descriptionRU: text("description_ru").notNull(),
  github: text("github"),
  icon: text("icon", { length: 1 }).notNull(),
  id: integer("id").primaryKey({ autoIncrement: true }),
  titleEN: text("title_en").notNull(),
  titleRU: text("title_ru").notNull(),
})

export type personalProject = typeof personalProjects.$inferSelect

export const personalProjectsRelations = relations(
  personalProjects,
  ({ many }) => ({
    tags: many(tagsToPersonalProjects),
  })
)
