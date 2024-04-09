import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeader from "~/components/the-header/TheHeader.vue"

describe("Компонент TheHeader", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(TheHeader)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег header", () => {
    expect(wrapper.element.tagName).toBe("HEADER")
  })
})
