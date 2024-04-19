// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import SocialCard, {
  type SocialCard as SocialCardType,
} from "~/components/social/SocialCard.server.vue"

describe("Компонент SocialCard", () => {
  let wrapper: VueWrapper

  /** Социальная сеть */
  const socialCard = {
    icon: "icon",
    title: "Социальная сеть",
    url: "https://test.com/",
  } as const satisfies SocialCardType

  beforeEach(async () => {
    wrapper = await mountSuspended(SocialCard, {
      props: {
        socialCard,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  const cardAttributes = (attribute: string) => wrapper.attributes(attribute)

  test("Семантический тег a", () => {
    expect(wrapper.element.tagName).toBe("A")
  })

  test("Открывается в новой вкладке", () => {
    expect(cardAttributes("target")).toBe("_blank")
  })

  test("Является внешней", () => {
    expect(cardAttributes("rel")).toBe("noopener noreferrer")
  })

  test("Ссылка из props", () => {
    expect(cardAttributes("href")).toBe(socialCard.url)
  })

  test("Присутствует aria-label", () => {
    expect(cardAttributes("aria-label")).toBe(socialCard.title)
  })
})
