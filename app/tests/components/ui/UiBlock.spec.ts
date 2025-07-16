// @vitest-environment happy-dom
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
      props: { title },
      slots: { default: () => TEST_BLOCK },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Заголовок блока", () => {
    test("Выставляется из props", async () => {
      expect(wrapper.find("h2").text()).toBe(title)
    })

    test("Скрывается при передаче параметра hideTitle", async () => {
      await wrapper.setProps({ hideTitle: true })

      expect(wrapper.find("h2").exists()).toBeFalsy()
    })

    describe("Подзаголовок блока", () => {
      test("По умолчанию скрыт", () => {
        expect(wrapper.find("h3").exists()).toBeFalsy()
      })

      test("Выставляется из props", async () => {
        await wrapper.setProps({ subTitle })

        expect(wrapper.find("h3").text()).toBe(subTitle)
      })

      test("Скрывается при передаче параметра hideTitle", async () => {
        await wrapper.setProps({ hideTitle: true, subTitle })

        expect(wrapper.find("h3").exists()).toBeFalsy()
      })
    })
  })

  test("Семантический тег section", () => {
    expect(wrapper.element.tagName).toBe("SECTION")
  })

  test("Передача контента через slot", () => {
    expect(wrapper.html()).toContain(
      `&lt;div id='test-block'&gt;Тест&lt;/div&gt;`,
    )
  })

  test("Отступ при скролле", () => {
    expect(wrapper.classes()).toContain("scroll-mt-32")
  })
})
