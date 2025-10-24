// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheFooter from "~/components/TheFooter.server.vue"

describe("Компонент TheFooter", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(TheFooter)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег footer", () => {
    expect(wrapper.element.tagName).toBe("FOOTER")
  })

  test("Текущий год в Copyright", () => {
    const copyright = wrapper.find("[data-testid=copyright]")

    expect(copyright.text()).toContain(`2021-${new Date().getFullYear()}`)
  })
})
