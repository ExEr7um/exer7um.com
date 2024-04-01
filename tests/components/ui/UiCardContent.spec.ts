import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiCardContent from "~/components/ui/UiCardContent.vue"

import { tags } from "./tags/UiTags.spec"

describe("Компонент UiCardContent", () => {
  const cardContent = {
    description: "Описание",
    tags,
    title: "Заголовок",
  }

  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(UiCardContent, {
      props: cardContent,
      shallow: true,
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
      expect(wrapper.find("[data-test-id=tags]").attributes().tags).toBe(
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
