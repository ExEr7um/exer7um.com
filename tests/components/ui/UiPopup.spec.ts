import type { VueWrapper } from "@vue/test-utils"

import { mount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiPopup from "~/components/ui/UiPopup.vue"

describe("Компонент UiPopup", () => {
  const title = "Заголовок блока"
  const description = "Описание блока"
  const testBlock = "<div id='test-block'>Тест</div>"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(UiPopup, {
      props: {
        description,
        title,
      },
      slots: {
        default: () => testBlock,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const popup = () => document.querySelector("[data-test-id=ui-popup]")!
  const status = () => document.querySelector("[data-test-id=status]")

  describe("Поля поп-апа", () => {
    test("Заголовок", () => {
      expect(popup().querySelector("h3")?.innerText).toBe(title)
    })

    test("Описание", () => {
      expect(popup().querySelector("p")?.innerText).toBe(description)
    })
  })

  test("Передача контента через slot", () => {
    expect(popup().innerHTML).toContain(testBlock)
  })

  describe.sequential("Статус поп-апа", () => {
    test("Отсутствие по умолчанию", () => {
      expect(status()).toBeNull()
    })

    test("Успешный статус", async () => {
      await wrapper.setProps({
        status: "success",
      })

      expect(status()?.classList).toContain("bg-green-50")
    })

    test("Ошибочный статус", async () => {
      await wrapper.setProps({
        status: "error",
      })

      expect(status()?.classList).toContain("bg-red-50")
    })
  })
})
