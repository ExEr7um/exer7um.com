export default defineTask({
  meta: {
    description: "Заполнение базы данных начальными данными",
    name: "db:seed",
  },
  async run() {
    console.log("Заполнение базы данных начальными данными...")

    await db.batch([
      db.insert(schema.tags).values(seedData.tags),

      db.insert(schema.projects).values(seedData.projects),
      db.insert(schema.tagsToProjects).values(seedData.tagsToProjects),

      db.insert(schema.personalProjects).values(seedData.personalProjects),
      db
        .insert(schema.tagsToPersonalProjects)
        .values(seedData.tagsToPersonalProjects),

      db.insert(schema.workplaces).values(seedData.workplaces),
      db.insert(schema.tagsToWorkplaces).values(seedData.tagsToWorkplaces),
    ])

    return { result: "База данных успешно заполнена начальными данными" }
  },
})
