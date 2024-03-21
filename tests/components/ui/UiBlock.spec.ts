import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiBlock from "~/components/ui/UiBlock.vue"

describe("Компонент UiBlock", () => {
  const title = "Заголовок блока"
  const testBlock = "<div id='test-block'>Тест</div>"

  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(UiBlock, {
      props: {
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

  test("Заголовок блока", () => {
    expect(wrapper.find("h2").text()).toBe(title)
  })

  test("Передача контента через slot", () => {
    expect(wrapper.html()).toContain(testBlock)
  })
})
