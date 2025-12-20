export default defineTask({
  meta: {
    description: "Заполнение базы данных начальными данными",
    name: "db:seed",
  },
  async run() {
    console.log("Заполнение базы данных начальными данными...")

    const tags = [
      { title: "Vue 2" },
      { title: "Tailwind CSS" },
    ] as const satisfies (typeof schema.tags.$inferInsert)[]

    const projects = [
      {
        backgroundColor: "#000000",
        descriptionEN: "Online shop of brand clothes",
        descriptionRU: "Интернет-магазин брендовой одежды",
        logo: "/oonyxx-store.svg",
        titleEN: "oonyxx.store",
        titleRU: "oonyxx.store",
        url: "https://exer7um.github.io/Oonyxx-Store/",
        year: 2019,
      },
      {
        backgroundColor: "#FFFFFF",
        descriptionEN:
          "Online shop of brand clothing under the oonyxx franchise",
        descriptionRU: "Интернет-магазин одежды по франшизе oonyxx",
        logo: "/high-quality-store.svg",
        titleEN: "High Quality Store",
        titleRU: "High Quality Store",
        url: "https://exer7um.github.io/High-Quality-Store/",
        year: 2019,
      },
    ] as const satisfies (typeof schema.projects.$inferInsert)[]

    const personalProjects = [
      {
        descriptionEN: `Course work on the topic "Information and reference system of the restaurant`,
        descriptionRU:
          "Курсовая работа по теме «Информационно-справочная система ресторана»",
        github: "https://github.com/ExEr7um/restaurant-client",
        icon: "🍔",
        titleEN: "My restaurant",
        titleRU: "Мой ресторан",
      },
      {
        descriptionEN: `Graduation work on the topic "Tech e-commerce"`,
        descriptionRU: "ВКР на тему «Интернет-магазин компьютерной техники»",
        github: "https://github.com/ExEr7um/tech-ecommerce",
        icon: "🛍️",
        titleEN: "Tech e-commerce",
        titleRU: "Интернет-магазин",
      },
    ] as const satisfies (typeof schema.personalProjects.$inferInsert)[]

    const workplaces = [
      {
        descriptionEN: "Lead of Development Team / Frontend Developer",
        descriptionRU: "Глава отдела разработки / Фронтенд разработчик",
        endDate: new Date("2024-03-01"),
        logo: "/pacific.webp",
        startDate: new Date("2021-06-01"),
        titleEN: "Pacific Studio",
        titleRU: "Pacific Studio",
      },
      {
        descriptionEN: "Frontend Developer",
        descriptionRU: "Фронтенд разработчик",
        endDate: new Date("2025-11-01"),
        logo: "/delimobil.webp",
        startDate: new Date("2024-04-01"),
        titleEN: "Delimobil",
        titleRU: "Делимобиль",
      },
    ] as const satisfies (typeof schema.workplaces.$inferInsert)[]

    const tagsToProjects = [
      { projectId: 1, tagId: 1 },
      { projectId: 2, tagId: 1 },
      { projectId: 2, tagId: 2 },
    ] as const satisfies (typeof schema.tagsToProjects.$inferInsert)[]

    const tagsToPersonalProjects = [
      { personalProjectId: 1, tagId: 1 },
      { personalProjectId: 2, tagId: 1 },
      { personalProjectId: 2, tagId: 2 },
    ] as const satisfies (typeof schema.tagsToPersonalProjects.$inferInsert)[]

    const tagsToWorkplaces = [
      { tagId: 1, workplaceId: 1 },
      { tagId: 1, workplaceId: 2 },
      { tagId: 2, workplaceId: 2 },
    ] as const satisfies (typeof schema.tagsToWorkplaces.$inferInsert)[]

    await db.batch([
      db.insert(schema.tags).values(tags),
      db.insert(schema.projects).values(projects),
      db.insert(schema.personalProjects).values(personalProjects),
      db.insert(schema.workplaces).values(workplaces),
      db.insert(schema.tagsToProjects).values(tagsToProjects),
      db.insert(schema.tagsToPersonalProjects).values(tagsToPersonalProjects),
      db.insert(schema.tagsToWorkplaces).values(tagsToWorkplaces),
    ])

    return { result: "База данных успешно заполнена начальными данными" }
  },
})
