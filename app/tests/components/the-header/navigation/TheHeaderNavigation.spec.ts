import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeaderNavigation from "~/components/the-header/navigation/TheHeaderNavigation.vue"
import { navigation } from "~/tests/constants/navigation"

describe("Компонент TheHeaderNavigation", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeaderNavigation, {
      props: { navigation },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const nav = () => wrapper.find("nav")
  const navigationLink = () => nav().find("a")

  test("Семантический тег nav", () => {
    expect(nav().exists()).toBeTruthy()
  })

  describe("Элементы навигации", () => {
    test("Правильное количество элементов", () => {
      /** Количество элементов в навигации */
      const navigationLinksCount = nav().findAll("a").length

      expect(navigationLinksCount).toBe(navigation.length)
    })

    test("Семантический тег a", () => {
      expect(navigationLink().exists()).toBeTruthy()
    })

    test("Ссылки передаются из навигации", () => {
      expect(navigationLink().attributes("href")).toBe(navigation[0].to)
    })
  })
})
