import { consola } from "consola"
import { migrate } from "drizzle-orm/d1/migrator"

export default defineNitroPlugin(async () => {
  if (!import.meta.dev) return

  // @ts-expect-error - при запуске typecheck не определяется тип
  onHubReady(async () => {
    await migrate(useDrizzle(), {
      migrationsFolder: "server/database/migrations",
    })
      .then(() => {
        consola.success("Миграции БД проведены успешно")
      })
      .catch((err) => {
        consola.error("Ошибка при проведении миграций БД", err)
      })
  })
})
