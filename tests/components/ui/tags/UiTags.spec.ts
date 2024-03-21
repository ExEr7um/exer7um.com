import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import type { Tag } from "~/server/database/schema/tag"

import UiTags from "~/components/ui/tags/UiTags.vue"
import UiTagsCard from "~/components/ui/tags/UiTagsCard.vue"

export const tags: Tag[] = [
  {
    id: 1,
    title: "Заголовок тега",
  },
  {
    id: 2,
    title: "Заголовок тега",
  },
]

describe("Компонент UiTags", () => {
  let wrapper: VueWrapper

  const tagsList = () => wrapper.findAllComponents(UiTagsCard)
  const isEveryTagSmall = () =>
    tagsList().every((tag) => tag.attributes().small === "true")

  beforeEach(async () => {
    wrapper = await mountSuspended(UiTags, {
      props: {
        tags,
      },
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Правильное количество тегов", () => {
    expect(tagsList().length).toBe(tags.length)
  })

  describe("Параметр small", () => {
    test("Отсутствие параметра", () => {
      expect(isEveryTagSmall()).toBeFalsy()
    })

    test("Присутствие параметра", async () => {
      await wrapper.setProps({
        small: true,
      })

      expect(isEveryTagSmall()).toBeTruthy()
    })
  })
})
