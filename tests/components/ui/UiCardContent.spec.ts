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
  }

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiCardContent, {
      props: cardContent,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(wrapper.find("h4").text()).toBe(cardContent.title)
    })

    test("Описание", () => {
      expect(wrapper.find("p").text()).toBe(cardContent.description)
    })
  })

  describe("Список тегов", () => {
    test("Передается из props", () => {
      expect(wrapper.find("[data-test-id=tags]").attributes("tags")).toBe(
        cardContent.tags.toString()
      )
    })

    test("Отсутствует при пустом массиве", async () => {
      cardContent.tags = []

      await wrapper.setProps(cardContent)

      expect(wrapper.find("[data-test-id=tags]").exists()).toBeFalsy()
    })
  })
})
