import { relations } from "drizzle-orm"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

import { baseCard } from "./common"
import { tagsToPersonalProjects } from "./tagsToPersonalProjects"

export const personalProjects = sqliteTable("personal_projects", {
  ...baseCard,
  github: text("github"),
  icon: text("icon", { length: 1 }).notNull(),
})

export type PersonalProject = typeof personalProjects.$inferSelect

export const personalProjectsRelations = relations(
  personalProjects,
  ({ many }) => ({
    tags: many(tagsToPersonalProjects),
  })
)
