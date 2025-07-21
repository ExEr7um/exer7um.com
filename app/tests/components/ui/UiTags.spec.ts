// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { UBadge } from "#components"
import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiTags from "~/components/ui/UiTags.vue"
import { tags } from "~/tests/constants/tags"

describe("Компонент UiTags", () => {
  let wrapper: VueWrapper

  const tagsList = () => wrapper.findAllComponents(UBadge)
  const firstTag = () => tagsList().at(0)!

  beforeEach(() => {
    wrapper = shallowMount(UiTags, { props: { tags } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильное количество тегов", () => {
    expect(tagsList()).toHaveLength(tags.length)
  })

  describe("Передача параметров", () => {
    test("Цвет", () => {
      expect(firstTag().props().color).toBe("neutral")
    })

    test("Размер", () => {
      expect(firstTag().props().size).toBe("lg")
    })

    test("Вариант", () => {
      expect(firstTag().props().variant).toBe("soft")
    })

    test("Текст", () => {
      expect(firstTag().props().label).toBe(tags[0].title)
    })
  })
})
