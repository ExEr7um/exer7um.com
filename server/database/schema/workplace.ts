import { relations } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { baseCard } from "./common"
import { tagsToWorkplaces } from "./tagsToWorkplaces"

export const workplaces = sqliteTable("workplaces", {
  endDate: integer("end_date", { mode: "timestamp" }),
  ...baseCard,
  logo: text("logo").notNull(),
  startDate: integer("start_date", { mode: "timestamp" }).notNull(),
})

export type Workplace = typeof workplaces.$inferSelect

export const workplacesRelations = relations(workplaces, ({ many }) => ({
  tags: many(tagsToWorkplaces),
}))
