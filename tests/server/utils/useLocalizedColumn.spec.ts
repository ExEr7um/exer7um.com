// @vitest-environment node
import useLocalizedColumn from "@/server/utils/useLocalizedColumn"
import { createEvent } from "h3"
import { IncomingMessage, ServerResponse } from "http"
import { Socket } from "net"
import { beforeEach, describe, expect, test } from "vitest"

describe("Функция useLocalizedColumn", () => {
  /** Название колонки */
  const columnName = "column"

  /** Запрос к серверу */
  let request: IncomingMessage

  beforeEach(() => {
    // Создаем запрос
    request = new IncomingMessage(new Socket())

    // Устанавливаем хедер Accept-Language на EN
    request.headers["accept-language"] = "en"
  })

  const event = () => createEvent(request, new ServerResponse(request))
  const localizedColumn = () => useLocalizedColumn(columnName, event())

  describe("Передан хедер EN", () => {
    test("Возвращается английское название колонки", () => {
      expect(localizedColumn()).toBe(columnName + "EN")
    })
  })

  describe("Не передан хедер локализации", () => {
    test("Возвращается русское название колонки", () => {
      // Устанавливаем хедер Accept-Language на undefined
      request.headers["accept-language"] = undefined

      expect(localizedColumn()).toBe(columnName + "RU")
    })
  })
})
