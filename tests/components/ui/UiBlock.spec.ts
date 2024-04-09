import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiBlock from "~/components/ui/UiBlock.vue"

describe("Компонент UiBlock", () => {
  const title = "Заголовок блока"
  const testBlock = "<div id='test-block'>Тест</div>"

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(UiBlock, {
      slots: {
        default: () => testBlock,
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

  test("Семантический тег section", () => {
    expect(wrapper.element.tagName).toBe("SECTION")
  })

  test("Передача контента через slot", () => {
    expect(wrapper.html()).toContain(testBlock)
  })
})
