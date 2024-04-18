import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import WorkplacesCardDate from "~/components/workplaces/card/WorkplacesCardDate.vue"

describe("Компонент WorkplacesCardDate", () => {
  const date = "2024-01-01T00:00:00.000Z"

  const defaultClasses = "tag"
  const activeClasses =
    "border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(WorkplacesCardDate, {
      props: {
        date,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const wrapperClasses = () => wrapper.classes()
  const setDateNull = async () =>
    await wrapper.setProps({
      date: null,
    })

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
    test("По умолчанию присутствует только класс tag", () => {
      expect(wrapperClasses()).toContain(defaultClasses)
    })

    test("По умолчанию отсутствуют классы выделения", () => {
      expect(wrapperClasses()).not.toContain(activeClasses)
    })
  })

  describe("Отсутствие даты", () => {
    test("Вывод текста «Настоящее время»", async () => {
      await setDateNull()

      expect(wrapper.text()).toBe("Настоящее время")
    })

    test("Отсутствует класс по умолчанию", async () => {
      await setDateNull()

      expect(wrapperClasses()).not.toContain(defaultClasses)
    })

    test("Присутствуют классы выделения", async () => {
      await setDateNull()

      expect(wrapperClasses().join(" ")).toContain(activeClasses)
    })
  })
})
