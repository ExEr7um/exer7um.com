import type { VueWrapper } from "@vue/test-utils"

import { TheHeader } from "#components"
import { mountSuspended } from "@nuxt/test-utils/runtime"

describe("Компонент TheHeader", () => {
  let wrapper: VueWrapper

  const desktopNavigation = () =>
    wrapper.findComponent({ name: "UNavigationMenu" })
  const mobileNavigation = () =>
    wrapper.findComponent({ name: "TheHeaderNavigationMobile" })

  beforeEach(async () => {
    wrapper = await mountSuspended(TheHeader, { shallow: true })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег header", () => {
    expect(wrapper.element.tagName).toBe("HEADER")
  })

  describe("Десктопная навигация", () => {
    test("Отображается", () => {
      expect(desktopNavigation().exists()).toBeTruthy()
    })

    test("Передаются элементы навигации", () => {
      expect(desktopNavigation().props("items")).toMatchSnapshot()
    })

    test("Отображается на десктопных устройствах", () => {
      expect(desktopNavigation().classes()).toContain("md:flex")
    })
  })

  describe("Мобильная навигация", () => {
    test("Отображается", () => {
      expect(mobileNavigation().exists()).toBeTruthy()
    })

    test("Передаются элементы навигации", () => {
      expect(mobileNavigation().props("navigation")).toMatchSnapshot()
    })

    test("Скрывается на десктопных устройствах", () => {
      expect(mobileNavigation().classes()).toContain("md:hidden")
    })
  })
})
