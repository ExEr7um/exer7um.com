import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import ProjectsCard from "~/components/projects/ProjectsCard.vue"
import UiCardContent from "~/components/ui/UiCardContent.vue"
import { projects } from "~/tests/constants/projects"

describe("Компонент ProjectsCard", () => {
  const project = projects[0]

  let wrapper: VueWrapper

  const cardContentAttributes = (attribute: string) =>
    wrapper.findComponent(UiCardContent).attributes(attribute)
  const logoAttributes = (attribute: string) =>
    wrapper.findComponent({ name: "NuxtImg" }).attributes(attribute)
  const projectLinkAttributes = (attribute: string) =>
    wrapper.find("[data-test-id=project-link]").attributes(attribute)

  beforeEach(() => {
    wrapper = shallowMount(ProjectsCard, {
      props: {
        project,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(cardContentAttributes("title")).toBe(project.title)
    })

    test("Описание", () => {
      expect(cardContentAttributes("description")).toBe(project.description)
    })

    test("Теги", () => {
      expect(cardContentAttributes("tags")).toBe(project.tags.toString())
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
      expect(logoAttributes("format")).toBe("svg")
    })

    test("Провайдер Cloudinary", () => {
      expect(logoAttributes("provider")).toBe("cloudinary")
    })

    test("Значение из props", () => {
      expect(logoAttributes("src")).toBe(project.logo)
    })

    test("Загрузка lazy", () => {
      expect(logoAttributes("loading")).toBe("lazy")
    })
  })

  describe("Ссылка на проект", () => {
    test("Правильно передается из props", () => {
      expect(projectLinkAttributes("to")).toBe(project.url)
    })

    test("Открывается в новой вкладке", () => {
      expect(projectLinkAttributes("target")).toBe("_blank")
    })
  })
})
