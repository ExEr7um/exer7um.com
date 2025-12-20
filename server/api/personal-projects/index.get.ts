export default defineEventHandler(async (event) => {
  const { limit } = await getValidatedQuery(event, (query) =>
    limitQuerySchema.parse(query),
  )

  /** Список проектов */
  const personalProjects = await db.query.personalProjects.findMany({
    columns: { github: true, icon: true, id: true },
    extras: {
      description:
        sql<string>`${schema.personalProjects[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description",
        ),
      title:
        sql<string>`${schema.personalProjects[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title",
        ),
    },
    limit: limit, // Ограничиваем количество результатов
    orderBy: desc(schema.personalProjects.createdAt), // Сортируем по дате создания — сначала новые
    with: { tags: { columns: {}, with: { tag: true } } },
  })

  return personalProjects.map((project) => {
    return { ...project, tags: project.tags.map((tag) => tag.tag) }
  })
})
