import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import ContactMeButton from "~/components/ContactMeButton.vue"

describe("Компонент ContactMeButton", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(ContactMeButton)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильный текст кнопки", () => {
    expect(wrapper.text()).toBe("Написать мне 👋🏻")
  })

  test("Кнопка переводит на страницу «Связаться со мной»", () => {
    /** Атрибут `href` кнопки */
    const buttonHref = wrapper.attributes().href

    expect(buttonHref).toBe("/contact-me/")
  })
})
