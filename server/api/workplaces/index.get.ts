import { sql } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  /** Список мест работы */
  const workplaces = await useDrizzle().query.workplaces.findMany({
    columns: {
      createdAt: false,
      descriptionEN: false,
      descriptionRU: false,
      titleEN: false,
      titleRU: false,
    },
    extras: {
      description:
        sql<string>`${tables.workplaces[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description",
        ),
      title:
        sql<string>`${tables.workplaces[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title",
        ),
    },
    orderBy: desc(tables.workplaces.createdAt), // Сортируем по дате создания — сначала новые
    with: { tags: { columns: {}, with: { tag: true } } },
  })

  return workplaces.map((workplace) => {
    return { ...workplace, tags: workplace.tags.map((tag) => tag.tag) }
  })
})
