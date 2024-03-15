import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeaderNavigation from "~/components/the-header/navigation/TheHeaderNavigation.vue"

describe("Компонент TheHeaderNavigation", () => {
  let wrapper: VueWrapper

  /** Список навигации */
  const navigation = ["index", "projects"] as const satisfies string[]

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeaderNavigation, {
      props: {
        navigation,
      },
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег nav", () => {
    expect(wrapper.element.tagName).toBe("NAV")
  })

  test("Правильное количество элементов", () => {
    /** Количество элементов в навигации */
    const navigationLinksCount = wrapper.element.childElementCount

    expect(navigationLinksCount).toBe(navigation.length)
  })
})
