import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheFooter from "~/components/the-footer/TheFooter.server.vue"

describe("Компонент TheFooter", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(TheFooter, {
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег footer", () => {
    expect(wrapper.element.tagName).toBe("FOOTER")
  })

  test("Текущий год в Copyright", () => {
    const copyright = wrapper.find("[data-test-id=copyright]")

    expect(copyright.text()).toContain(`2021-${new Date().getFullYear()}`)
  })
})
