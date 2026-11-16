import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"

import { UiContactMeButton } from "#components"

describe("Компонент UiContactMeButton", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(UiContactMeButton)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильный текст кнопки", () => {
    expect(wrapper.text()).toBe("Написать мне✍🏻")
  })

  test("Кнопка переводит на страницу «Связаться со мной»", () => {
    /** Атрибут `href` кнопки */
    const buttonHref = wrapper.find("a").attributes("href")

    expect(buttonHref).toBe("/contact-me/")
  })
})
