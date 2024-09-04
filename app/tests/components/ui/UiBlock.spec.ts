import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiBlock from "~/components/ui/UiBlock.vue"
import { TEST_BLOCK } from "~/tests/constants/utils"

describe("Компонент UiBlock", () => {
  const title = "Заголовок блока"

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

  test("Семантический тег section", () => {
    expect(wrapper.element.tagName).toBe("SECTION")
  })

  test("Передача контента через slot", () => {
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<section class="flex scroll-mt-32 flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10">
        <!--v-if-->&lt;div id='test-block'&gt;Тест&lt;/div&gt;
      </section>"
    `)
  })

  test("Отступ при скролле", () => {
    expect(wrapper.classes()).toContain("scroll-mt-32")
  })
})
