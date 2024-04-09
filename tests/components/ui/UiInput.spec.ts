import type { VueWrapper } from "@vue/test-utils"
import type { InputTypeHTMLAttribute } from "vue"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiInput from "~/components/ui/UiInput.vue"

describe("Компонент UiInput", () => {
  const defaultProps = {
    id: "test-field",
  }
  const labelText = "Текст label"

  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(UiInput, {
      props: defaultProps,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const input = () => wrapper.find("input")
  const label = () => wrapper.find("label")
  const inputAttribute = (attribute: string) => input().attributes(attribute)

  const setLabel = async () => await wrapper.setProps({ label: labelText })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    // Проверка атрибута `id`
    expect(inputAttribute("id")).toBe(defaultProps.id)
    // Проверка атрибута `name`
    expect(inputAttribute("name")).toBe(defaultProps.id)
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
      expect(inputAttribute("placeholder")).toBeUndefined()
    })

    test("Выставление при передаче параметра", async () => {
      const placeholder = "Тестовый placeholder"
      await wrapper.setProps({ placeholder })

      expect(inputAttribute("placeholder")).toBe(placeholder)
    })
  })

  describe("Параметр required", () => {
    test("По умолчанию true", () => {
      // При преобразовании в HTML, true заменяется на пустую строку.
      expect(inputAttribute("required")).toBe("")
    })

    test("Выставление при передаче параметра", async () => {
      await wrapper.setProps({ required: false })

      expect(inputAttribute("required")).toBeUndefined()
    })
  })

  describe("Параметр type", () => {
    test("По умолчанию text", () => {
      expect(inputAttribute("type")).toBe("text")
    })

    test("Выставление при передаче параметра", async () => {
      const type: InputTypeHTMLAttribute = "email"
      await wrapper.setProps({ type })

      expect(inputAttribute("type")).toBe(type)
    })
  })
})
