import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { getHeaderLocale } from "@intlify/h3"
import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { getQuery } from "h3"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import PersonalProjects from "~/components/personal-projects/PersonalProjects.vue"
import PersonalProjectsCard from "~/components/personal-projects/PersonalProjectsCard.vue"

import { tags } from "../ui/tags/UiTags.spec"

export const personalProjects = [
  {
    description: "Описание личного проекта",
    github: "https://exer7um.com/",
    icon: "🍔",
    id: 1,
    tags: tags,
    title: "Личный проект",
  },
  {
    description: "Описание личного проекта",
    github: "https://exer7um.com/",
    icon: "🍔",
    id: 2,
    tags: tags,
    title: "Личный проект",
  },
]

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
    expect(wrapper.findAllComponents(PersonalProjectsCard).length).toBe(
      personalProjects.length
    )
  })

  describe("Кнопка «Показать все»", () => {
    test("По умолчанию кнопка не отображается", () => {
      expect(viewAllButton().exists()).toBeFalsy()
    })

    test.fails("Отображается при переданном limit", async () => {
      await wrapper.setProps({
        limit: 3,
      })

      expect(viewAllButton().exists()).toBeTruthy()
    })
  })

  describe.sequential("Запрос к API", () => {
    test("Передается хедер локализации", () => {
      expect(getHeaderLocale(userRequest!).baseName).toBeTruthy()
    })

    test("По умолчанию limit не передается", () => {
      expect(getQuery(userRequest!).limit).toBeFalsy()
    })

    test("Передается limit", async () => {
      await wrapper.setProps({
        limit: 3,
      })

      expect(getQuery(userRequest!).limit).toBe("3")
    })
  })
})
