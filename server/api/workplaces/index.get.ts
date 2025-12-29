export default defineEventHandler(async (event) => {
  /** Список мест работы */
  const workplaces = await db.query.workplaces.findMany({
    columns: {
      createdAt: false,
      descriptionEN: false,
      descriptionRU: false,
      titleEN: false,
      titleRU: false,
    },
    extras: {
      description:
        sql<string>`${schema.workplaces[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description",
        ),
      title:
        sql<string>`${schema.workplaces[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title",
        ),
    },
    orderBy: desc(schema.workplaces.startDate), // Сортируем по дате начала работы — сначала новые
    with: { tags: { columns: {}, with: { tag: true } } },
  })

  return workplaces.map((workplace) => {
    return { ...workplace, tags: workplace.tags.map((tag) => tag.tag) }
  })
})
