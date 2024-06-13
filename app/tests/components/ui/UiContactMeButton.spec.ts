// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiContactMeButton from "~/components/ui/UiContactMeButton.vue"

describe("Компонент UiContactMeButton", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(UiContactMeButton)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильный текст кнопки", () => {
    expect(wrapper.text()).toBe("Написать мне 👋🏻")
  })

  test("Кнопка переводит на страницу «Связаться со мной»", () => {
    /** Атрибут `href` кнопки */
    const buttonHref = wrapper.attributes("href")

    expect(buttonHref).toBe("/contact-me/")
  })
})
