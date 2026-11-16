import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"

import { TheHeaderLocaleSwitch } from "#components"

describe("Компонент TheHeaderLocaleSwitch", () => {
  let wrapper: VueWrapper

  // Тултипу нужен провайдер из `UApp`
  const options = { global: { stubs: { UTooltip: { template: "<slot />" } } } }

  const link = () => wrapper.find("a")

  /**
   * Выставляет локаль в Nuxt i18n и в экземпляре vue-i18n из `setup.ts`.
   *
   * @param locale - код локали
   */
  async function setLocale(locale: "en" | "ru") {
    useNuxtApp().$i18n.locale.value = locale
    wrapper.vm.$i18n.locale = locale
    await nextTick()
  }

  afterEach(async () => {
    await setLocale("ru")
    wrapper.unmount()
  })

  test("На русской странице ведет на английскую", async () => {
    wrapper = await mountSuspended(TheHeaderLocaleSwitch, { ...options, route: "/about/" })

    expect(link().attributes("href")).toBe("/en/about/")
  })

  // Nuxt UI не локализует ссылку повторно, иначе она вела бы на `/en/about/`
  test("На английской странице ведет на русскую", async () => {
    wrapper = await mountSuspended(TheHeaderLocaleSwitch, { ...options, route: "/en/about/" })
    await setLocale("en")

    expect(link().attributes("href")).toBe("/about/")
  })
})
