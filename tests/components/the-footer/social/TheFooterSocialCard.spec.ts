import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import TheFooterSocialCard, {
  type SocialCard,
} from "~/components/the-footer/social/TheFooterSocialCard.server.vue"

describe("Компонент TheFooterSocialCard", () => {
  let wrapper: VueWrapper

  /** Социальная сеть */
  const socialCard = {
    icon: "icon",
    url: "https://test.com/",
  } as const satisfies SocialCard

  beforeEach(async () => {
    wrapper = await mountSuspended(TheFooterSocialCard, {
      props: {
        socialCard,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("Семантический тег a", () => {
    expect(wrapper.element.tagName).toBe("A")
  })

  test("Открывается в новой вкладке", () => {
    expect(wrapper.attributes().target).toBe("_blank")
  })

  test("Является внешней", () => {
    expect(wrapper.attributes().rel).toBe("noopener noreferrer")
  })

  test("Ссылка из props", () => {
    expect(wrapper.attributes().href).toBe(socialCard.url)
  })
})
