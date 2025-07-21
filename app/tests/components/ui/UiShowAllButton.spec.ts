import type { VueWrapper } from "@vue/test-utils"

import { UButton } from "#components"
import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiShowAllButton from "~/components/ui/UiShowAllButton.vue"

describe("UiShowAllButton", () => {
  let wrapper: VueWrapper

  const to = "/projects"

  beforeEach(() => {
    wrapper = shallowMount(UiShowAllButton, { props: { to } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const button = () => wrapper.findComponent(UButton)

  describe("Передача параметров", () => {
    test("Ссылка", () => {
      expect(button().props().to).toBe(to)
    })

    test("Размер", () => {
      expect(button().props().size).toBe("lg")
    })

    test("Вариант", () => {
      expect(button().props().variant).toBe("soft")
    })
  })

  test("Текст кнопки", () => {
    expect(button().props().label).toBe("Смотреть все")
  })
})
