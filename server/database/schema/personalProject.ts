import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToPersonalProjects } from "./tagsToPersonalProjects"

export const personalProjects = sqliteTable("personal_projects", {
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  description: text("description").notNull(),
  github: text("github"),
  icon: text("icon", { length: 1 }).notNull(),
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
})

export type personalProject = typeof personalProjects.$inferSelect

export const personalProjectsRelations = relations(
  personalProjects,
  ({ many }) => ({
    tagsToPersonalProjects: many(tagsToPersonalProjects),
  })
)
