import { relations } from "drizzle-orm"
import { index, integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { personalProjects } from "./personalProject"
import { tags } from "./tag"

export const tagsToPersonalProjects = sqliteTable(
  "tags_to_personal_projects",
  {
    personalProjectId: integer("personal_project_id")
      .notNull()
      .references(() => personalProjects.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id),
  },
  (table) => [
    index("idx_tpp_personal_project_id").on(table.personalProjectId),
    index("idx_tpp_tag_id").on(table.tagId),
    index("idx_tpp_personal_project_tag").on(
      table.personalProjectId,
      table.tagId,
    ),
  ],
)

export const tagsToPersonalProjectsRelations = relations(
  tagsToPersonalProjects,
  ({ one }) => ({
    personalProject: one(personalProjects, {
      fields: [tagsToPersonalProjects.personalProjectId],
      references: [personalProjects.id],
    }),
    tag: one(tags, {
      fields: [tagsToPersonalProjects.tagId],
      references: [tags.id],
    }),
  }),
)
