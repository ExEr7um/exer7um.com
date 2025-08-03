import { relations } from "drizzle-orm"
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { baseCard } from "./common"
import { tagsToProjects } from "./tagsToProjects"

export const projects = sqliteTable(
  "projects",
  {
    backgroundColor: text("background_color").notNull(),
    logo: text("logo").notNull(),
    url: text("url").notNull(),
    year: integer("year").notNull(),
    ...baseCard,
  },
  (table) => [index("idx_projects_created_at").on(table.createdAt)],
)

export type Project = typeof projects.$inferSelect

export const projectsRelations = relations(projects, ({ many }) => ({
  tags: many(tagsToProjects),
}))
