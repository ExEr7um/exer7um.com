import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToProjects } from "./tagsToProjects"

export const projects = sqliteTable("projects", {
  backgroundColor: text("background_color").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  descriptionEN: text("description_en").notNull(),
  descriptionRU: text("description_ru").notNull(),
  id: integer("id").primaryKey({ autoIncrement: true }),
  logo: text("logo").notNull(),
  titleEN: text("title_en").notNull(),
  titleRU: text("title_ru").notNull(),
  url: text("url").notNull(),
  year: integer("year").notNull(),
})

export type Project = typeof projects.$inferSelect

export const projectsRelations = relations(projects, ({ many }) => ({
  tags: many(tagsToProjects),
}))
