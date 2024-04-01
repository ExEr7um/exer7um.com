import { sql } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  const { limit } = getQuery(event)

  // Если limit передан, но не является числом
  if (limit && !Number(limit))
    // Выводим ошибку
    throw createError({
      message: "Параметр limit не является числом",
      status: 400,
    })

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
        sql`${tables.projects[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description"
        ),
      title:
        sql`${tables.projects[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title"
        ),
    },
    limit: limit as number, // Ограничиваем количество результатов
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
