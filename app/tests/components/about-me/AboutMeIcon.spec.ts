// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { AboutMeIcon } from "#components"
import { shallowMount } from "@vue/test-utils"

import type { TechnologyIcon } from "~/components/about-me/AboutMeIcon.vue"

const icon = {
  color: "#00DC82",
  icon: "logos:nuxt-icon",
  key: "nuxt",
  title: "Nuxt 3",
} as const satisfies TechnologyIcon

describe("Компонент AboutMeIcon", () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(AboutMeIcon, { props: { icon } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Цвет текста", () => {
      expect(wrapper.attributes("style")).toContain(`color: ${icon.color}`)
    })

    test("Иконка", () => {
      expect(
        wrapper.findComponent({ name: "NuxtIcon" }).attributes("name"),
      ).toBe(icon.icon)
    })

    test("Заголовок", () => {
      expect(wrapper.text()).toBe(icon.title)
    })
  })
})
