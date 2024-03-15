import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeader from "~/components/the-header/TheHeader.vue"

describe("Компонент TheHeader", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeader, {
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег header", () => {
    expect(wrapper.element.tagName).toBe("HEADER")
  })
})
