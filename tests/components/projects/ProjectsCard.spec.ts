import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import ProjectsCard from "~/components/projects/ProjectsCard.vue"
import UiCardContent from "~/components/ui/UiCardContent.vue"

import { projects } from "./Projects.spec"

describe("Компонент ProjectsCard", () => {
  const project = projects[0]

  let wrapper: VueWrapper

  const cardContentAttributes = () =>
    wrapper.findComponent(UiCardContent).attributes()
  const logoAttributes = () =>
    wrapper.findComponent({ name: "NuxtImg" }).attributes()
  const projectLinkAttributes = () =>
    wrapper.find("[data-test-id=project-link]").attributes()

  beforeEach(async () => {
    wrapper = await mountSuspended(ProjectsCard, {
      props: {
        project,
      },
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(cardContentAttributes().title).toBe(project.title)
    })

    test("Описание", () => {
      expect(cardContentAttributes().description).toBe(project.description)
    })

    test("Теги", () => {
      expect(cardContentAttributes().tags).toBe(project.tags.toString())
    })

    test("Год", () => {
      expect(wrapper.find("small").text()).toBe(project.year.toString())
    })
  })

  describe("Логотип проекта", () => {
    test("Выставляется фон из props", () => {
      expect(
        wrapper.find<HTMLDivElement>("[data-test-id=logo]").element.style
          .backgroundColor
      ).toBe(project.backgroundColor)
    })

    test("Формат SVG", () => {
      expect(logoAttributes().format).toBe("svg")
    })

    test("Провайдер Cloudinary", () => {
      expect(logoAttributes().provider).toBe("cloudinary")
    })

    test("Значение из props", () => {
      expect(logoAttributes().src).toBe(project.logo)
    })
  })

  describe("Ссылка на проект", () => {
    test("Правильно передается из props", () => {
      expect(projectLinkAttributes().to).toBe(project.url)
    })

    test("Открывается в новой вкладке", () => {
      expect(projectLinkAttributes().target).toBe("_blank")
    })
  })
})
