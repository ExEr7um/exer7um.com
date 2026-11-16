// @vitest-environment node
import { describe, expect, test } from "vitest"
import useLocalizedColumn from "~~/server/utils/useLocalizedColumn"

describe("Функция useLocalizedColumn", () => {
  /** Название колонки */
  const columnName = "column"

  /**
   * Функция для получения названия колонки для запроса с переданными хедерами.
   *
   * @param headers - хедеры запроса.
   * @returns локализированное название колонки
   */
  const localizedColumn = (headers?: HeadersInit) =>
    useLocalizedColumn(columnName, { req: new Request("http://localhost", { headers }) })

  test.each([
    ["en", "EN"],
    ["en-US", "EN"],
    ["en-US,en;q=0.9,ru;q=0.8", "EN"],
    ["ru-RU", "RU"],
  ])("Хедер %s → %s", (header, suffix) => {
    expect(localizedColumn({ "Accept-Language": header })).toBe(columnName + suffix)
  })

  describe("Не передан хедер локализации", () => {
    test("Возвращается русское название колонки", () => {
      expect(localizedColumn()).toBe(columnName + "RU")
    })
  })
})
