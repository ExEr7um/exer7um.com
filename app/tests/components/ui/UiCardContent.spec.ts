// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { UiCardContent } from "#components"
import { shallowMount } from "@vue/test-utils"

import tags from "~/tests/constants/tags"

describe("Компонент UiCardContent", () => {
  const cardContent = {
    description: "Описание",
    tags,
    title: "Заголовок",
  } as const

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiCardContent, { props: cardContent })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const title = () => wrapper.find("[data-testid=title]")

  describe("Заголовок", () => {
    test("По умолчанию h4", () => {
      expect(title().element.tagName).toBe("H4")
    })

    test("При передаче largeTitle становится h3", async () => {
      await wrapper.setProps({ largeTitle: true })

      expect(title().element.tagName).toBe("H3")
    })

    test("Передача текста", () => {
      expect(title().text()).toBe(cardContent.title)
    })
  })

  test("Правильная передача описания", () => {
    expect(wrapper.find("p").text()).toBe(cardContent.description)
  })

  describe("Список тегов", () => {
    test("Передается из props", () => {
      expect(wrapper.find("[data-testid=tags]").attributes("tags")).toBe(
        cardContent.tags.toString(),
      )
    })

    test("Отсутствует при пустом массиве", async () => {
      await wrapper.setProps({ tags: [] })

      expect(wrapper.find("[data-testid=tags]").exists()).toBeFalsy()
    })
  })
})
