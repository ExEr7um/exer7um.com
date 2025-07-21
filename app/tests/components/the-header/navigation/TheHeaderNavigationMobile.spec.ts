import type { VueWrapper } from "@vue/test-utils"

import { UButton } from "#components"
import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheHeaderNavigationMobile from "~/components/the-header/navigation/TheHeaderNavigationMobile.vue"
import { navigation } from "~/tests/constants/navigation"

describe("Компонент TheHeaderNavigationMobile", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeaderNavigationMobile, {
      props: { navigation },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const menuButton = () => wrapper.findComponent(UButton)
  const navigationMenu = () => wrapper.findComponent({ name: "UDropdownMenu" })

  test("Присутствует кнопка открытия меню", () => {
    expect(menuButton().exists()).toBeTruthy()
  })

  describe("Выпадающее меню", () => {
    test("Присутствует выпадающее меню", () => {
      expect(navigationMenu().exists()).toBeTruthy()
    })

    test("Передаются элементы навигации", () => {
      expect(navigationMenu().props("items")).toBe(navigation)
    })
  })
})
