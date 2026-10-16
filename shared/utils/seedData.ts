import type { PersonalProjectInsert } from "~~/server/db/schema/personalProject"
import type { ProjectInsert } from "~~/server/db/schema/project"
import type { TagInsert } from "~~/server/db/schema/tag"
import type { TagsToPersonalProjectsInsert } from "~~/server/db/schema/tagsToPersonalProjects"
import type { TagsToProjectsInsert } from "~~/server/db/schema/tagsToProjects"
import type { TagsToWorkplacesInsert } from "~~/server/db/schema/tagsToWorkplaces"
import type { WorkplaceInsert } from "~~/server/db/schema/workplace"

const tags = [{ title: "Vue 2" }, { title: "Tailwind CSS" }] as const satisfies TagInsert[]

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
    descriptionEN: "Online shop of brand clothing under the oonyxx franchise",
    descriptionRU: "Интернет-магазин одежды по франшизе oonyxx",
    logo: "/high-quality-store.svg",
    titleEN: "High Quality Store",
    titleRU: "High Quality Store",
    url: "https://exer7um.github.io/High-Quality-Store/",
    year: 2019,
  },
] as const satisfies ProjectInsert[]

const personalProjects = [
  {
    descriptionEN: `Course work on the topic "Information and reference system of the restaurant`,
    descriptionRU: "Курсовая работа по теме «Информационно-справочная система ресторана»",
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
] as const satisfies PersonalProjectInsert[]

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
] as const satisfies WorkplaceInsert[]

const tagsToProjects = [
  { projectId: 1, tagId: 1 },
  { projectId: 2, tagId: 1 },
  { projectId: 2, tagId: 2 },
] as const satisfies TagsToProjectsInsert[]

const tagsToPersonalProjects = [
  { personalProjectId: 1, tagId: 1 },
  { personalProjectId: 2, tagId: 1 },
  { personalProjectId: 2, tagId: 2 },
] as const satisfies TagsToPersonalProjectsInsert[]

const tagsToWorkplaces = [
  { tagId: 1, workplaceId: 1 },
  { tagId: 1, workplaceId: 2 },
  { tagId: 2, workplaceId: 2 },
] as const satisfies TagsToWorkplacesInsert[]

export default {
  personalProjects,
  projects,
  tags,
  tagsToPersonalProjects,
  tagsToProjects,
  tagsToWorkplaces,
  workplaces,
}
