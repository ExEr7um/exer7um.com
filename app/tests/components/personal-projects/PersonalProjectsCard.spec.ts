// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import { shallowMount } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test } from "vitest"

import PersonalProjectsCard from "~/components/personal-projects/PersonalProjectsCard.vue"
import UiCardContent from "~/components/ui/UiCardContent.vue"
import { personalProjects } from "~/tests/constants/personalProjects"

describe("Компонент PersonalProjectsCard", () => {
  const personalProject = personalProjects[0]

  let wrapper: VueWrapper

  const cardContentAttributes = (attribute: string) =>
    wrapper.findComponent(UiCardContent).attributes(attribute)
  const githubLinkAttributes = (attribute: string) =>
    wrapper.find("[data-test-id=github-link]").attributes(attribute)

  beforeEach(() => {
    wrapper = shallowMount(PersonalProjectsCard, { props: { personalProject } })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe("Правильная передача полей", () => {
    test("Заголовок", () => {
      expect(cardContentAttributes("title")).toBe(personalProject.title)
    })

    test("Описание", () => {
      expect(cardContentAttributes("description")).toBe(
        personalProject.description,
      )
    })

    test("Иконка", () => {
      expect(wrapper.find("[data-test-id=icon]").text()).toBe(
        personalProject.icon,
      )
    })

    test("Теги", () => {
      expect(cardContentAttributes("tags")).toBe(
        personalProject.tags.toString(),
      )
    })
  })

  describe("Ссылка на GitHub", () => {
    test("Выставляется из props", () => {
      expect(githubLinkAttributes("to")).toBe(personalProject.github)
    })

    test("Открывается в новой вкладке", () => {
      expect(githubLinkAttributes("target")).toBe("_blank")
    })

    test("Присутствует aria-label", () => {
      expect(githubLinkAttributes("aria-label")).toBe(
        `Открыть проект ${personalProject.title} на GitHub`,
      )
    })
  })
})
