import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiTextArea from "~/components/ui/UiTextArea.vue"

describe("Компонент UiTextArea", () => {
  const defaultProps = {
    id: "test-field",
  } as const
  const labelText = "Текст label"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiTextArea, {
      props: defaultProps,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const textarea = () => wrapper.find("textarea")
  const label = () => wrapper.find("label")
  const textareaAttributes = (attribute: string) =>
    textarea().attributes(attribute)

  const setLabel = async () => await wrapper.setProps({ label: labelText })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    // Проверка атрибута `id`
    expect(textareaAttributes("id")).toBe(defaultProps.id)
    // Проверка атрибута `name`
    expect(textareaAttributes("name")).toBe(defaultProps.id)
  })

  describe("Параметр label", () => {
    test("Отсутствие по умолчанию", () => {
      expect(label().exists()).toBeFalsy()
    })

    test("Появление при передаче текста", async () => {
      await setLabel()

      expect(label().exists()).toBeTruthy()
    })

    test("Выставление текста", async () => {
      await setLabel()

      expect(label().text()).toBe(labelText)
    })

    test("Выставление атрибута for", async () => {
      await setLabel()

      expect(label().attributes("for")).toBe(defaultProps.id)
    })
  })

  describe("Параметр placeholder", () => {
    test("Отсутствие по умолчанию", () => {
      expect(textareaAttributes("placeholder")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const placeholder = "Тестовый placeholder"
      await wrapper.setProps({ placeholder })

      expect(textareaAttributes("placeholder")).toBe(placeholder)
    })
  })

  describe("Параметр required", () => {
    test("По умолчанию true", () => {
      // При преобразовании в HTML, true заменяется на пустую строку.
      expect(textareaAttributes("required")).toBe("")
    })

    test("Выставление при передаче параметра", async () => {
      await wrapper.setProps({ required: false })

      expect(textareaAttributes("required")).toBeUndefined()
    })
  })

  describe("Параметр rows", () => {
    test("По умолчанию 4", () => {
      expect(textareaAttributes("rows")).toBe("4")
    })

    test("Выставление при передаче параметра", async () => {
      const rows = 3
      await wrapper.setProps({ rows })

      expect(textareaAttributes("rows")).toBe(rows.toString())
    })
  })

  describe("Параметр minlength", () => {
    test("По умолчанию 2", () => {
      expect(textareaAttributes("minlength")).toBe("2")
    })

    test("Выставление при передаче параметра", async () => {
      const minlength = "3"
      await wrapper.setProps({ minlength })

      expect(textareaAttributes("minlength")).toBe(minlength)
    })
  })

  describe("Параметр maxlength", () => {
    test("Отсутствие по умолчанию", () => {
      expect(textareaAttributes("maxlength")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const maxlength = "3"
      await wrapper.setProps({ maxlength })

      expect(textareaAttributes("maxlength")).toBe(maxlength)
    })
  })
})
