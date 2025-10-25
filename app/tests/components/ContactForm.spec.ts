import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { ContactForm } from "#components"
import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { flushPromises } from "@vue/test-utils"
import { readBody } from "h3"

describe("Компонент ContactForm", () => {
  let wrapper: VueWrapper
  let userRequest: H3Event | undefined

  /** Заполненные данные формы */
  const contactData = {
    email: "you@example.com",
    message: "Сообщение",
    name: "Имя",
  } as const

  registerEndpoint("/api/messages", {
    handler: (request) => {
      userRequest = request

      return "OK"
    },
    method: "POST",
  })

  beforeEach(async () => {
    wrapper = await mountSuspended(ContactForm, { attachTo: document.body })
  })

  afterEach(() => {
    userRequest = undefined
    wrapper.unmount()
  })

  const name = () => wrapper.find("input#name")
  const email = () => wrapper.find("input#email")
  const message = () => wrapper.find("textarea#message")

  test("Семантический тег form", () => {
    expect(wrapper.element.tagName).toBe("FORM")
  })

  describe("Наличие полей", () => {
    test("Имя", () => {
      expect(name().exists()).toBeTruthy()
    })

    test("Электронная почта", () => {
      expect(email().exists()).toBeTruthy()
    })

    test("Сообщение", () => {
      expect(message().exists()).toBeTruthy()
    })
  })

  test("Фокусировка на первом инпуте", () => {
    expect(document.activeElement).toStrictEqual(name().element)
  })

  test("Отправка сообщения к API", async () => {
    await name().setValue(contactData.name)
    await email().setValue(contactData.email)
    await message().setValue(contactData.message)

    await wrapper.trigger("submit")
    await flushPromises()

    expect(await readBody(userRequest!)).toStrictEqual(contactData)
  })
})
