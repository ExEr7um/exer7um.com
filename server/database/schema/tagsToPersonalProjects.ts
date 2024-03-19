import { relations } from "drizzle-orm"
import { integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { personalProjects } from "./personalProject"
import { tags } from "./tag"

export const tagsToPersonalProjects = sqliteTable("tags_to_personal_projects", {
  personalProjectId: integer("personal_project_id")
    .notNull()
    .references(() => personalProjects.id),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id),
})

export const tagsToPersonalProjectsRelations = relations(
  tagsToPersonalProjects,
  ({ one }) => ({
    tag: one(tags, {
      fields: [tagsToPersonalProjects.tagId],
      references: [tags.id],
    }),
    user: one(personalProjects, {
      fields: [tagsToPersonalProjects.personalProjectId],
      references: [personalProjects.id],
    }),
  })
)
