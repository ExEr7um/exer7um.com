// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { getHeaderLocale } from "@intlify/h3"
import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { getQuery } from "h3"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import PersonalProjects from "~/components/personal-projects/PersonalProjects.vue"
import PersonalProjectsCard from "~/components/personal-projects/PersonalProjectsCard.vue"
import { personalProjects } from "~/tests/constants/personalProjects"

describe("Компонент PersonalProjects", () => {
  let wrapper: VueWrapper
  let userRequest: H3Event | undefined

  const viewAllButton = () => wrapper.findComponent({ name: "NuxtLinkLocale" })

  registerEndpoint("/api/personal-projects", (request) => {
    userRequest = request

    return personalProjects
  })

  beforeEach(async () => {
    wrapper = await mountSuspended(PersonalProjects)
  })

  afterEach(() => {
    userRequest = undefined
    wrapper.unmount()
  })

  test("Заголовок блока", () => {
    expect(wrapper.find("h2").text()).toBe("Личные проекты")
  })

  test("Количество проектов", () => {
    expect(wrapper.findAllComponents(PersonalProjectsCard)).toHaveLength(
      personalProjects.length,
    )
  })

  describe("Кнопка «Показать все»", () => {
    test("По умолчанию кнопка не отображается", () => {
      expect(viewAllButton().exists()).toBeFalsy()
    })

    test.fails("Отображается при переданном limit", async () => {
      await wrapper.setProps({ limit: 3 })

      expect(viewAllButton().exists()).toBeTruthy()
    })

    test.fails("Переводит на правильную страницу", async () => {
      await wrapper.setProps({ limit: 3 })

      expect(viewAllButton().attributes("to")).toBe(
        "/projects#personal-projects",
      )
    })
  })

  describe("Запрос к API", () => {
    test("Передается хедер локализации", () => {
      expect(getHeaderLocale(userRequest!).baseName).toBeTruthy()
    })

    test("По умолчанию limit не передается", () => {
      expect(getQuery(userRequest!).limit).toBeFalsy()
    })

    test("Передается limit", async () => {
      await wrapper.setProps({ limit: 3 })

      expect(getQuery(userRequest!).limit).toBe("3")
    })
  })
})
