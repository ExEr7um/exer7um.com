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
  const personalProjects = await useDrizzle().query.personalProjects.findMany({
    columns: {
      github: true,
      icon: true,
      id: true,
    },
    extras: {
      description:
        sql<string>`${tables.personalProjects[useLocalizedColumn<"descriptionEN" | "descriptionRU">("description", event)]}`.as(
          "description"
        ),
      title:
        sql<string>`${tables.personalProjects[useLocalizedColumn<"titleEN" | "titleRU">("title", event)]}`.as(
          "title"
        ),
    },
    limit: limit as number, // Ограничиваем количество результатов
    orderBy: desc(tables.personalProjects.createdAt), // Сортируем по дате создания — сначала новые
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
    },
  })

  return personalProjects.map((project) => {
    return {
      ...project,
      tags: project.tags.map((tag) => tag.tag),
    }
  })
})
