import { relations } from "drizzle-orm"
import { index, integer, sqliteTable } from "drizzle-orm/sqlite-core"

import { tags } from "./tag"
import { workplaces } from "./workplace"

export const tagsToWorkplaces = sqliteTable(
  "tags_to_workplaces",
  {
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id),
    workplaceId: integer("workplace_id")
      .notNull()
      .references(() => workplaces.id),
  },
  (table) => [
    index("idx_tw_tag_id").on(table.tagId),
    index("idx_tw_workplace_id").on(table.workplaceId),
    index("idx_tw_workplace_tag").on(table.workplaceId, table.tagId),
  ],
)

export type TagsToWorkplacesInsert = typeof tagsToWorkplaces.$inferInsert

export const tagsToWorkplacesRelations = relations(
  tagsToWorkplaces,
  ({ one }) => ({
    tag: one(tags, { fields: [tagsToWorkplaces.tagId], references: [tags.id] }),
    workplace: one(workplaces, {
      fields: [tagsToWorkplaces.workplaceId],
      references: [workplaces.id],
    }),
  }),
)
