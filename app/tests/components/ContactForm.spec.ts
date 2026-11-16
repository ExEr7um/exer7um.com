import type { VueWrapper } from "@vue/test-utils"
import type { H3Event } from "h3"

import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime"
import { createError, readBody } from "h3"

import { ContactForm } from "#components"

describe("Компонент ContactForm", () => {
  let wrapper: VueWrapper
  let userRequest: H3Event | undefined
  /** Отвечает ли API ошибкой */
  let isApiFailing = false

  /** Заполненные данные формы */
  const contactData = { email: "you@example.com", message: "Сообщение", name: "Имя" } as const

  registerEndpoint("/api/messages", {
    handler: (request) => {
      userRequest = request

      if (isApiFailing) throw createError({ status: 500 })

      return "OK"
    },
    method: "POST",
  })

  beforeEach(async () => {
    wrapper = await mountSuspended(ContactForm, { attachTo: document.body })
  })

  afterEach(() => {
    userRequest = undefined
    isApiFailing = false
    useToast().clear()
    wrapper.unmount()
  })

  const name = () => wrapper.find<HTMLInputElement>("input#name")
  const email = () => wrapper.find<HTMLInputElement>("input#email")
  const message = () => wrapper.find<HTMLTextAreaElement>("textarea#message")

  /** Заполняет поля формы и отправляет ее */
  async function submit() {
    await name().setValue(contactData.name)
    await email().setValue(contactData.email)
    await message().setValue(contactData.message)

    await wrapper.trigger("submit")

    // Ждем ответа API, после которого показывается уведомление
    await vi.waitFor(() => expect(useToast().toasts.value).toHaveLength(1))
  }

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

  describe("Отправка сообщения", () => {
    test("Данные отправляются к API", async () => {
      await submit()

      expect(await readBody(userRequest!)).toStrictEqual(contactData)
    })

    describe("Если сообщение отправлено", () => {
      beforeEach(submit)

      test("Поля формы очищаются", () => {
        expect(name().element.value).toBe("")
        expect(email().element.value).toBe("")
        expect(message().element.value).toBe("")
      })

      test("Показывается уведомление об успехе", () => {
        expect(useToast().toasts.value).toMatchObject([{ color: "success" }])
      })
    })

    describe("Если API ответило ошибкой", () => {
      beforeEach(async () => {
        isApiFailing = true
        await submit()
      })

      test("Поля формы сохраняются", () => {
        expect(name().element.value).toBe(contactData.name)
        expect(email().element.value).toBe(contactData.email)
        expect(message().element.value).toBe(contactData.message)
      })

      test("Показывается уведомление об ошибке", () => {
        expect(useToast().toasts.value).toMatchObject([{ color: "error" }])
      })
    })
  })
})
