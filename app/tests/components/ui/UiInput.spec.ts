import type { VueWrapper } from "@vue/test-utils"
import type { InputTypeHTMLAttribute } from "vue"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiInput from "~/components/ui/UiInput.vue"

describe("Компонент UiInput", () => {
  const defaultProps = { id: "test-field" } as const
  const labelText = "Текст label"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiInput, { props: defaultProps })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const input = () => wrapper.find("input")
  const label = () => wrapper.find("label")
  const inputAttributes = (attribute: string) => input().attributes(attribute)

  const setLabel = async () => await wrapper.setProps({ label: labelText })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    // Проверка атрибута `id`
    expect(inputAttributes("id")).toBe(defaultProps.id)
    // Проверка атрибута `name`
    expect(inputAttributes("name")).toBe(defaultProps.id)
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
      expect(inputAttributes("placeholder")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const placeholder = "Тестовый placeholder"
      await wrapper.setProps({ placeholder })

      expect(inputAttributes("placeholder")).toBe(placeholder)
    })
  })

  describe("Параметр required", () => {
    test("По умолчанию true", () => {
      // При преобразовании в HTML, true заменяется на пустую строку.
      expect(inputAttributes("required")).toBe("")
    })

    test("Выставление при передаче параметра", async () => {
      await wrapper.setProps({ required: false })

      expect(inputAttributes("required")).toBeUndefined()
    })
  })

  describe("Параметр type", () => {
    test("По умолчанию text", () => {
      expect(inputAttributes("type")).toBe("text")
    })

    test("Выставление при передаче параметра", async () => {
      const type: InputTypeHTMLAttribute = "email"
      await wrapper.setProps({ type })

      expect(inputAttributes("type")).toBe(type)
    })
  })

  describe("Параметр minlength", () => {
    test("Отсутствие по умолчанию", () => {
      expect(inputAttributes("minlength")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const minlength = "2"
      await wrapper.setProps({ minlength })

      expect(inputAttributes("minlength")).toBe(minlength)
    })
  })

  describe("Параметр maxlength", () => {
    test("Отсутствие по умолчанию", () => {
      expect(inputAttributes("maxlength")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const maxlength = "2"
      await wrapper.setProps({ maxlength })

      expect(inputAttributes("maxlength")).toBe(maxlength)
    })
  })
})
