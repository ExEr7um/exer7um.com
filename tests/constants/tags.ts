import type { Tag } from "~/server/database/schema/tag"

export const tags: Tag[] = [
  {
    id: 1,
    title: "Заголовок тега",
  },
  {
    id: 2,
    title: "Заголовок тега",
  },
] as const
