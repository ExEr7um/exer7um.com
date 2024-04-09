import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiTagsCard from "~/components/ui/tags/UiTagsCard.vue"

import { tags } from "./UiTags.spec"

describe("Компонент UiTagsCard", () => {
  const tag = tags[0]
  const classes = {
    big: "px-3",
    small: "px-2 text-xs sm:text-sm",
  }

  let wrapper: VueWrapper

  const elementClasses = () => wrapper.attributes("class")

  beforeEach(() => {
    wrapper = shallowMount(UiTagsCard, {
      props: {
        tag,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Заголовок тега", () => {
    expect(wrapper.text()).toBe(tag.title)
  })

  describe("Параметр small", () => {
    test("Полный размер при отсутствии параметра", () => {
      expect(elementClasses()).toContain(classes.big)
      expect(elementClasses()).not.toContain(classes.small)
    })

    test("Уменьшенный размер при присутствии параметра", async () => {
      await wrapper.setProps({
        small: true,
      })

      expect(elementClasses()).not.toContain(classes.big)
      expect(elementClasses()).toContain(classes.small)
    })
  })
})
