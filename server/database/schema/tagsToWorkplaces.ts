import { relations } from "drizzle-orm"
import { integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { tags } from "./tag"
import { workplaces } from "./workplace"

export const tagsToWorkplaces = sqliteTable("tags_to_workplaces", {
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id),
  workplaceId: integer("workplace_id")
    .notNull()
    .references(() => workplaces.id),
})

export const tagsToWorkplacesRelations = relations(
  tagsToWorkplaces,
  ({ one }) => ({
    tag: one(tags, {
      fields: [tagsToWorkplaces.tagId],
      references: [tags.id],
    }),
    workplace: one(workplaces, {
      fields: [tagsToWorkplaces.workplaceId],
      references: [workplaces.id],
    }),
  }),
)
