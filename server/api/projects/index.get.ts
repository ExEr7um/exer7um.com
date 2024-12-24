import { sql } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  const { limit } = await getValidatedQuery(event, (query) =>
    limitQuerySchema.parse(query),
  )

  /** Список проектов */
  const projects = await useDrizzle().query.projects.findMany({
    columns: {
      createdAt: false,
      descriptionEN: false,
      descriptionRU: false,
      titleEN: false,
      titleRU: false,
    },
    extras: {
      description:
        sql<string>`${tables.projects[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description",
        ),
      title:
        sql<string>`${tables.projects[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title",
        ),
    },
    limit: limit, // Ограничиваем количество результатов
    orderBy: desc(tables.projects.createdAt), // Сортируем по дате создания — сначала новые
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
    },
  })

  return projects.map((project) => {
    return {
      ...project,
      tags: project.tags.map((tag) => tag.tag),
    }
  })
})
