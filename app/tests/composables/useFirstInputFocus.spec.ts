import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, describe, expect, test } from "vitest"

import useFirstInputFocus from "~/composables/useFirstInputFocus"

describe("Функция useFirstInputFocus", () => {
  const testingComponent = defineComponent({
    setup() {
      useFirstInputFocus()
    },
    template: `<input id="first" /><input id="second" />`,
  })

  let wrapper: VueWrapper

  const mountComponent = () => {
    wrapper = shallowMount(testingComponent, { attachTo: document.body })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  const firstInput = () => wrapper.find<HTMLInputElement>("input#first")
  const secondInput = () => wrapper.find<HTMLInputElement>("input#second")

  test("Фокусируется на первом инпуте", () => {
    mountComponent()

    expect(document.activeElement).toStrictEqual(firstInput().element)
  })

  test("Кастомный селектор", () => {
    testingComponent.setup = () => {
      useFirstInputFocus("#second")
    }

    mountComponent()

    expect(document.activeElement).toStrictEqual(secondInput().element)
  })
})
