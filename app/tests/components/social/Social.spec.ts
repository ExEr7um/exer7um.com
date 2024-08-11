import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import Social from "~/components/social/Social.server.vue"

describe("Компонент Social", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(Social)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const socialCards = () => wrapper.findAllComponents({ name: "SocialCard" })

  describe("Отсутствует compact", () => {
    test("Отображается больше 2 соцсетей", () => {
      expect(socialCards().length).toBeGreaterThan(2)
    })

    test("Увеличенный отступ между кнопками", () => {
      expect(wrapper.classes()).toContain("gap-x-4")
    })
  })

  describe("Присутствует compact", () => {
    beforeEach(async () => {
      await wrapper.setProps({
        compact: true,
      })
    })

    test("Отображаются 2 соцсети", async () => {
      expect(socialCards()).toHaveLength(2)
    })

    test("Увеличенный отступ между кнопками", async () => {
      expect(wrapper.classes()).toContain("gap-x-2")
    })
  })
})
