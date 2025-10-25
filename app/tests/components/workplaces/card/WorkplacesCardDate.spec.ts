import type { VueWrapper } from "@vue/test-utils"

import { UBadge, WorkplacesCardDate } from "#components"
import { mountSuspended } from "@nuxt/test-utils/runtime"

describe("Компонент WorkplacesCardDate", () => {
  const date = "2024-01-01T00:00:00.000Z"

  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(WorkplacesCardDate, { props: { date } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const badge = () => wrapper.findComponent(UBadge)

  test("Семантический тег time", () => {
    expect(wrapper.element.tagName).toBe("TIME")
  })

  describe("Форматирование даты", () => {
    test("Правильный формат", () => {
      expect(wrapper.text()).toBe("январь 2024")
    })

    test.todo("Локализация")
  })

  describe("Стилизация присутствия даты", () => {
    test("По умолчанию нейтральный цвет", () => {
      expect(badge().props().color).toBe("neutral")
    })
  })

  describe("Отсутствие даты", () => {
    beforeEach(async () => {
      await wrapper.setProps({ date: undefined })
    })

    test("Вывод текста «Настоящее время»", async () => {
      expect(wrapper.text()).toBe("Настоящее время")
    })

    test("Акцентный цвет", async () => {
      expect(badge().props().color).toBe("primary")
    })
  })
})
