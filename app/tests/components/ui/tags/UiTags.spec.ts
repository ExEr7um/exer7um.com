// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import UiTags from "~/components/ui/tags/UiTags.vue"
import UiTagsCard from "~/components/ui/tags/UiTagsCard.vue"
import { tags } from "~/tests/constants/tags"

describe("Компонент UiTags", () => {
  let wrapper: VueWrapper

  const tagsList = () => wrapper.findAllComponents(UiTagsCard)
  const isEveryTagSmall = () =>
    tagsList().every((tag) => tag.attributes("small") === "true")

  beforeEach(() => {
    wrapper = shallowMount(UiTags, { props: { tags } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильное количество тегов", () => {
    expect(tagsList()).toHaveLength(tags.length)
  })

  describe("Параметр small", () => {
    test("Отсутствие параметра", () => {
      expect(isEveryTagSmall()).toBeFalsy()
    })

    test("Присутствие параметра", async () => {
      await wrapper.setProps({ small: true })

      expect(isEveryTagSmall()).toBeTruthy()
    })
  })
})
