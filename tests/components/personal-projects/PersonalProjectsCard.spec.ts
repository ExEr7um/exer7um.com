import type { VueWrapper } from "@vue/test-utils"

import { mountSuspended } from "@nuxt/test-utils/runtime"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import PersonalProjectsCard from "~/components/personal-projects/PersonalProjectsCard.vue"

import { personalProjects } from "./PersonalProjects.spec"

describe("Компонент PersonalProjectsCard", () => {
  const personalProject = personalProjects[0]

  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(PersonalProjectsCard, {
      props: {
        personalProject,
      },
      shallow: true,
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(wrapper.find("h4").text()).toBe(personalProject.title)
    })

    test("Описание", () => {
      expect(wrapper.find("p").text()).toBe(personalProject.description)
    })

    test("Иконка", () => {
      expect(wrapper.find("[data-test-id=icon]").text()).toBe(
        personalProject.icon
      )
    })

    test("Ссылка на GitHub", () => {
      expect(wrapper.find("[data-test-id=github-link]").attributes().to).toBe(
        personalProject.github
      )
    })

    test("Теги", () => {
      expect(wrapper.find("[data-test-id=tags]").attributes().tags).toBe(
        personalProject.tags.toString()
      )
    })
  })

  test("Список тегов отсутствует при пустом массиве", async () => {
    personalProject.tags = []

    await wrapper.setProps({
      personalProject,
    })

    expect(wrapper.find("[data-test-id=tags]").exists()).toBeFalsy()
  })

  test("Ссылка на GitHub открывается в новой вкладке", () => {
    expect(wrapper.find("[data-test-id=github-link]").attributes().target).toBe(
      "_blank"
    )
  })
})
