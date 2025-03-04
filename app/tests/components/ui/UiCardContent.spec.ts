import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiCardContent from "~/components/ui/UiCardContent.vue"
import { tags } from "~/tests/constants/tags"

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

  const title = () => wrapper.find("[data-test-id=title]")

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
      expect(wrapper.find("[data-test-id=tags]").attributes("tags")).toBe(
        cardContent.tags.toString(),
      )
    })

    test("Отсутствует при пустом массиве", async () => {
      await wrapper.setProps({ tags: [] })

      expect(wrapper.find("[data-test-id=tags]").exists()).toBeFalsy()
    })
  })
})
