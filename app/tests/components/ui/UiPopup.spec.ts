import type { VueWrapper } from "@vue/test-utils"

import { mount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiPopup from "~/components/ui/UiPopup.vue"
import { TEST_BLOCK } from "~/tests/constants/utils"

const popup = () => document.querySelector("[data-test-id=ui-popup]")!
const status = () => document.querySelector("[data-test-id=status]")

describe("Компонент UiPopup", () => {
  const title = "Заголовок блока"
  const description = "Описание блока"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(UiPopup, {
      props: { description, title },
      slots: { default: () => TEST_BLOCK },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Поля поп-апа", () => {
    test("Заголовок", () => {
      expect(popup().querySelector("h3")?.textContent).toBe(title)
    })

    test("Описание", () => {
      expect(popup().querySelector("p")?.textContent).toBe(description)
    })
  })

  test("Передача контента через slot", () => {
    expect(popup().innerHTML).toContain(
      `&lt;div id='test-block'&gt;Тест&lt;/div&gt;`,
    )
  })

  describe("Статус поп-апа", () => {
    test("Отсутствие по умолчанию", () => {
      expect(status()).toBeNull()
    })

    test("Успешный статус", async () => {
      await wrapper.setProps({ status: "success" })

      expect(status()?.classList).toContain("bg-green-50")
    })

    test("Ошибочный статус", async () => {
      await wrapper.setProps({ status: "error" })

      expect(status()?.classList).toContain("bg-red-50")
    })
  })
})
