import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiBlock from "~/components/ui/UiBlock.vue"
import { TEST_BLOCK } from "~/tests/constants/utils"

describe("Компонент UiBlock", () => {
  const title = "Заголовок блока"
  const subTitle = "Подзаголовок блока"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiBlock, {
      slots: {
        default: () => TEST_BLOCK,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Заголовок блока", () => {
    test("По умолчанию скрыт", () => {
      expect(wrapper.find("h2").exists()).toBeFalsy()
    })

    test("Выставляется из props", async () => {
      await wrapper.setProps({ title })

      expect(wrapper.find("h2").text()).toBe(title)
    })
  })

  describe("Подзаголовок блока", () => {
    test("По умолчанию скрыт", () => {
      expect(wrapper.find("h3").exists()).toBeFalsy()
    })

    test("Выставляется из props", async () => {
      await wrapper.setProps({ subTitle })

      expect(wrapper.find("h3").text()).toBe(subTitle)
    })
  })

  test("Семантический тег section", () => {
    expect(wrapper.element.tagName).toBe("SECTION")
  })

  test("Передача контента через slot", () => {
    expect(wrapper.html()).toContain(
      `&lt;div id='test-block'&gt;Тест&lt;/div&gt;`
    )
  })

  test("Отступ при скролле", () => {
    expect(wrapper.classes()).toContain("scroll-mt-32")
  })
})
