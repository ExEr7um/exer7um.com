// @vitest-environment nuxt
import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { getHeaderLocale } from "@intlify/h3"
import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { getQuery } from "h3"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import Projects from "~/components/projects/Projects.vue"
import ProjectsCard from "~/components/projects/ProjectsCard.vue"
import { projects } from "~/tests/constants/projects"

describe("Компонент Projects", () => {
  let wrapper: VueWrapper
  let userRequest: H3Event | undefined

  const viewAllButton = () => wrapper.findComponent({ name: "NuxtLinkLocale" })

  registerEndpoint("/api/projects", (request) => {
    userRequest = request

    return projects
  })

  beforeEach(async () => {
    wrapper = await mountSuspended(Projects)
  })

  afterEach(() => {
    userRequest = undefined
    wrapper.unmount()
  })

  describe("Заголовок блока", () => {
    test("По умолчанию отображается", () => {
      expect(wrapper.find("h2").text()).toBe("Проекты")
    })

    test("Скрывается при передаче параметра", async () => {
      await wrapper.setProps({
        hideTitle: true,
      })

      expect(wrapper.find("h2").exists()).toBeFalsy()
    })
  })

  test("Количество проектов", () => {
    expect(wrapper.findAllComponents(ProjectsCard)).toHaveLength(
      projects.length
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

    test.fails("Переводит на правильную страницу", async () => {
      await wrapper.setProps({
        limit: 3,
      })

      expect(viewAllButton().attributes("to")).toBe("/projects#projects")
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
      await wrapper.setProps({
        limit: 3,
      })

      expect(getQuery(userRequest!).limit).toBe("3")
    })
  })
})
