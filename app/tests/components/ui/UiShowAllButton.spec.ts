import type { VueWrapper } from "@vue/test-utils"

import { UButton, UiShowAllButton } from "#components"
import { shallowMount } from "@vue/test-utils"

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
