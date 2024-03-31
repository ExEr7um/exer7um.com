import { relations } from "drizzle-orm"
import { integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { projects } from "./project"
import { tags } from "./tag"

export const tagsToProjects = sqliteTable("tags_to_projects", {
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id),
})

export const tagsToProjectsRelations = relations(tagsToProjects, ({ one }) => ({
  project: one(projects, {
    fields: [tagsToProjects.projectId],
    references: [projects.id],
  }),
  tag: one(tags, {
    fields: [tagsToProjects.tagId],
    references: [tags.id],
  }),
}))
