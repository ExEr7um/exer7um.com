import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeaderNavigationMobile from "~/components/the-header/navigation/mobile/TheHeaderNavigationMobile.vue"

describe("Компонент TheHeaderNavigationMobile", () => {
  let wrapper: VueWrapper

  /** Список навигации */
  const navigation = ["index", "projects"] as const satisfies string[]

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeaderNavigationMobile, {
      props: {
        navigation,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const navigationMenu = () => wrapper.findComponent({ name: "MenuItems" })
  const menuButton = () => wrapper.findComponent({ name: "menuButton" })

  describe("Открытие мобильного меню", () => {
    test("Мобильное меню по умолчанию закрыто", () => {
      expect(navigationMenu().isVisible()).toBeFalsy()
    })

    test("Нажатие на кнопку открывает меню", async () => {
      await menuButton().trigger("click")

      expect(navigationMenu().isVisible()).toBeTruthy()
    })
  })

  describe.sequential("Открытое меню", async () => {
    test("Семантический тег nav", async () => {
      await menuButton().trigger("click")

      expect(navigationMenu().element.tagName).toBe("NAV")
    })

    test("Правильное количество элементов", async () => {
      await menuButton().trigger("click")

      /** Количество элементов в навигации */
      const navigationLinksCount = navigationMenu().element.childElementCount

      expect(navigationLinksCount).toBe(navigation.length)
    })
  })
})
