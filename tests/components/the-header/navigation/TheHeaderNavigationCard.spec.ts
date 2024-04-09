// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeaderNavigationCard from "~/components/the-header/navigation/TheHeaderNavigationCard.vue"

describe("Компонент TheHeaderNavigationCard", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeaderNavigationCard, {
      props: {
        routeName: "index",
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег a", () => {
    expect(wrapper.element.tagName).toBe("A")
  })

  test("Ссылка на страницу `/`", () => {
    expect(wrapper.attributes("href")).toBe("/")
  })
})
