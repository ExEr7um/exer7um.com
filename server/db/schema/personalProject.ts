import { relations } from "drizzle-orm"
import { index, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { baseCard } from "./common"
import { tagsToPersonalProjects } from "./tagsToPersonalProjects"

export const personalProjects = sqliteTable(
  "personal_projects",
  {
    ...baseCard,
    github: text("github"),
    icon: text("icon", { length: 1 }).notNull(),
  },
  (table) => [index("idx_personal_projects_created_at").on(table.createdAt)],
)

export type PersonalProject = typeof personalProjects.$inferSelect
export type PersonalProjectInsert = typeof personalProjects.$inferInsert

export const personalProjectsRelations = relations(
  personalProjects,
  ({ many }) => ({ tags: many(tagsToPersonalProjects) }),
)
