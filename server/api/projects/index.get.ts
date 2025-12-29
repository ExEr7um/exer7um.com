export default defineEventHandler(async (event) => {
  const { limit } = await getValidatedQuery(event, (query) =>
    limitQuerySchema.parse(query),
  )

  /** Список проектов */
  const projects = await db.query.projects.findMany({
    columns: {
      createdAt: false,
      descriptionEN: false,
      descriptionRU: false,
      titleEN: false,
      titleRU: false,
    },
    extras: {
      description:
        sql<string>`${schema.projects[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description",
        ),
      title:
        sql<string>`${schema.projects[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title",
        ),
    },
    limit: limit, // Ограничиваем количество результатов
    orderBy: desc(schema.projects.createdAt), // Сортируем по дате создания — сначала новые
    with: { tags: { columns: {}, with: { tag: true } } },
  })

  return projects.map((project) => {
    return { ...project, tags: project.tags.map((tag) => tag.tag) }
  })
})
