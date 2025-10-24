// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { UiHero } from "#components"
import { mount } from "@vue/test-utils"

describe("Компонент UiHero", () => {
  let wrapper: VueWrapper

  const title = "Заголовок страницы"
  const description = "Описание страницы"

  beforeEach(() => {
    wrapper = mount(UiHero, { props: { description, title } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Передается заголовок", () => {
    expect(wrapper.find("h1").text()).toBe(title)
  })

  test("Передается описание", () => {
    expect(wrapper.find("p").text()).toBe(description)
  })
})
