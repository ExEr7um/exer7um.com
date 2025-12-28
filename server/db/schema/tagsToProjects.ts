import { relations } from "drizzle-orm"
import { index, integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { projects } from "./project"
import { tags } from "./tag"

export const tagsToProjects = sqliteTable(
  "tags_to_projects",
  {
    projectId: integer("project_id")
      .notNull()
      .references(() => projects.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id),
  },
  (table) => [
    index("idx_tp_project_id").on(table.projectId),
    index("idx_tp_tag_id").on(table.tagId),
    index("idx_tp_project_tag").on(table.projectId, table.tagId),
  ],
)

export type TagsToProjectsInsert = typeof tagsToProjects.$inferInsert

export const tagsToProjectsRelations = relations(tagsToProjects, ({ one }) => ({
  project: one(projects, {
    fields: [tagsToProjects.projectId],
    references: [projects.id],
  }),
  tag: one(tags, { fields: [tagsToProjects.tagId], references: [tags.id] }),
}))
