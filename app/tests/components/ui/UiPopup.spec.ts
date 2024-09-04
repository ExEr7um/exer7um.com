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
      props: {
        description,
        title,
      },
      slots: {
        default: () => TEST_BLOCK,
      },
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
    expect(popup().innerHTML).toMatchInlineSnapshot(
      `"<div class="fixed inset-0 bg-black/15 backdrop-blur"></div><div id="headlessui-dialog-panel-3" data-headlessui-state="open" class="z-50 flex max-w-full flex-col gap-y-6 rounded-2xl bg-white p-6 sm:p-8 dark:bg-neutral-900"><!--v-if--><h3 id="headlessui-dialog-title-4" data-headlessui-state="open">Заголовок блока</h3><p id="headlessui-description-5" data-headlessui-state="open" class="max-w-lg">Описание блока</p>&lt;div id='test-block'&gt;Тест&lt;/div&gt;</div>"`
    )
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
