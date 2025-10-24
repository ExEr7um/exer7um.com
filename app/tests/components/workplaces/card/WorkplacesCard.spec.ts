// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { UiCardContent, WorkplacesCard } from "#components"
import { shallowMount } from "@vue/test-utils"

import workplaces from "~/tests/constants/workplaces"

describe("Компонент WorkplacesCard", () => {
  const workplace = workplaces[0]

  let wrapper: VueWrapper

  const cardContentAttributes = (attribute: string) =>
    wrapper.findComponent(UiCardContent).attributes(attribute)
  const logoAttributes = (attribute: string) =>
    wrapper.findComponent({ name: "NuxtImg" }).attributes(attribute)

  beforeEach(() => {
    wrapper = shallowMount(WorkplacesCard, {
      props: {
        // @ts-expect-error неправильная типизация
        workplace,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(cardContentAttributes("title")).toBe(workplace.title)
    })

    test("Описание", () => {
      expect(cardContentAttributes("description")).toBe(workplace.description)
    })

    test("Теги", () => {
      expect(cardContentAttributes("tags")).toBe(workplace.tags.toString())
    })
  })

  describe("Логотип проекта", () => {
    test("Атрибут alt", () => {
      expect(logoAttributes("alt")).toBe(workplace.title)
    })

    test("Провайдер Cloudinary", () => {
      expect(logoAttributes("provider")).toBe("cloudinary")
    })

    test("Значение из props", () => {
      expect(logoAttributes("src")).toBe(workplace.logo)
    })

    test("Загрузка lazy", () => {
      expect(logoAttributes("loading")).toBe("lazy")
    })
  })

  describe("Передача дат", () => {
    test("Передача начальной даты", () => {
      const startDate = wrapper.find("[data-testid=startDate]")

      expect(startDate.attributes("date")).toBe(workplace.startDate)
    })

    test("Передача конечной даты", () => {
      const endDate = wrapper.find("[data-testid=endDate]")

      expect(endDate.attributes("date")).toBe(workplace.endDate)
    })
  })
})
