// @vitest-environment happy-dom
import type { VueWrapper } from "@vue/test-utils"

import {
  LazyUButton,
  PersonalProjectsCard,
  UBadge,
  UiCardContent,
} from "#components"
import { shallowMount } from "@vue/test-utils"

import personalProjects from "~/tests/constants/personalProjects"

describe("Компонент PersonalProjectsCard", () => {
  const personalProject = personalProjects[0]

  let wrapper: VueWrapper

  const cardContentAttributes = (attribute: string) =>
    wrapper.findComponent(UiCardContent).attributes(attribute)
  const githubLinkAttributes = (attribute: string) =>
    wrapper.findComponent(LazyUButton).attributes(attribute)

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
      expect(wrapper.findComponent(UBadge).props().label).toBe(
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

    test("Иконка", () => {
      expect(githubLinkAttributes("icon")).toBe("simple-icons:github")
    })
  })
})
