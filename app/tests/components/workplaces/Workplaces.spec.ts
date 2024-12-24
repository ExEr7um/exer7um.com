// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { getHeaderLocale } from "@intlify/h3"
import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import WorkplacesCard from "~/components/workplaces/card/WorkplacesCard.vue"
import Workplaces from "~/components/workplaces/Workplaces.vue"
import { workplaces } from "~/tests/constants/workplaces"

describe("Компонент Workplaces", () => {
  let wrapper: VueWrapper
  let userRequest: H3Event | undefined

  registerEndpoint("/api/workplaces", (request) => {
    userRequest = request

    return workplaces
  })

  beforeEach(async () => {
    wrapper = await mountSuspended(Workplaces)
  })

  afterEach(() => {
    userRequest = undefined
    wrapper.unmount()
  })

  describe("Заголовок блока", () => {
    test("По умолчанию отображается", () => {
      expect(wrapper.find("h2").text()).toBe("pages.experience")
    })

    test("Скрывается при передаче параметра", async () => {
      await wrapper.setProps({
        hideTitle: true,
      })

      expect(wrapper.find("h2").exists()).toBeFalsy()
    })
  })

  test.todo("Отображается правильный подзаголовок", () => {
    expect(wrapper.find("h3").text()).toBe("1 год 8 месяцев")
  })

  test("Количество проектов", () => {
    expect(wrapper.findAllComponents(WorkplacesCard)).toHaveLength(
      workplaces.length,
    )
  })

  describe("Запрос к API", () => {
    test("Передается хедер локализации", () => {
      expect(getHeaderLocale(userRequest!).baseName).toBeTruthy()
    })
  })
})
