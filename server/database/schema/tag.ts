import { relations } from "drizzle-orm"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

import { id } from "./common"
import { tagsToPersonalProjects } from "./tagsToPersonalProjects"
import { tagsToProjects } from "./tagsToProjects"
import { tagsToWorkplaces } from "./tagsToWorkplaces"

export const tags = sqliteTable("tags", {
  ...id,
  title: text("title").notNull(),
})

export type Tag = typeof tags.$inferSelect

export const tagsRelations = relations(tags, ({ many }) => ({
  personalProjects: many(tagsToPersonalProjects),
  projects: many(tagsToProjects),
  workplaces: many(tagsToWorkplaces),
}))
