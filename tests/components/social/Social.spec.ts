import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import Social from "~/components/social/Social.server.vue"

describe("Компонент Social", () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(Social, {
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const socialCards = () => wrapper.findAllComponents({ name: "SocialCard" })
  const setCompact = async () =>
    await wrapper.setProps({
      compact: true,
    })

  describe("Отсутствует compact", () => {
    test("Отображается больше 2 соцсетей", () => {
      expect(socialCards().length).toBeGreaterThan(2)
    })

    test("Увеличенный отступ между кнопками", () => {
      expect(wrapper.classes()).toContain("gap-x-4")
    })
  })

  describe("Присутствует compact", () => {
    test("Отображаются 2 соцсети", async () => {
      await setCompact()

      expect(socialCards().length).toBe(2)
    })

    test("Увеличенный отступ между кнопками", async () => {
      await setCompact()

      expect(wrapper.classes()).toContain("gap-x-2")
    })
  })
})
