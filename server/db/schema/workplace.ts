import { relations } from "drizzle-orm"
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { baseCard } from "./common"
import { tagsToWorkplaces } from "./tagsToWorkplaces"

export const workplaces = sqliteTable(
  "workplaces",
  {
    endDate: integer("end_date", { mode: "timestamp" }),
    ...baseCard,
    logo: text("logo").notNull(),
    startDate: integer("start_date", { mode: "timestamp" }).notNull(),
  },
  (table) => [index("idx_workplaces_created_at").on(table.createdAt)],
)

export type Workplace = typeof workplaces.$inferSelect
export type WorkplaceInsert = typeof workplaces.$inferInsert

export const workplacesRelations = relations(workplaces, ({ many }) => ({
  tags: many(tagsToWorkplaces),
}))
