// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import Social from "~/components/Social.server.vue"

describe("Компонент Social", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(Social)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const socialButtons = () => wrapper.findAllComponents({ name: "UButton" })
  const firstSocialButton = () => socialButtons().at(0)!

  describe("Отсутствует compact", () => {
    test("Отображается больше 2 соцсетей", () => {
      expect(socialButtons().length).toBeGreaterThan(2)
    })

    test("Увеличенный отступ между кнопками", () => {
      expect(wrapper.classes()).toContain("gap-x-4")
    })
  })

  describe("Присутствует compact", () => {
    beforeEach(async () => {
      await wrapper.setProps({ compact: true })
    })

    test("Отображаются 2 соцсети", async () => {
      expect(socialButtons()).toHaveLength(2)
    })

    test("Увеличенный отступ между кнопками", async () => {
      expect(wrapper.classes()).toContain("gap-x-3")
    })
  })

  describe("Кнопки соцсетей", () => {
    test("Открывается в новой вкладке", () => {
      expect(firstSocialButton().attributes("target")).toBe("_blank")
    })

    test("Является внешней", () => {
      expect(firstSocialButton().attributes("external")).toBeTruthy()
    })
  })
})
