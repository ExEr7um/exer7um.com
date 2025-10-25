// @vitest-environment node
import russianPluralization from "~~/i18n/utils/russianPluralization"

describe("Функция russianPluralization", () => {
  describe("Если число 0", () => {
    test("Функция всегда возвращает 0", () => {
      expect(russianPluralization(0, 2)).toBe(0)
      expect(russianPluralization(0, 3)).toBe(0)
      expect(russianPluralization(0, 4)).toBe(0)
    })
  })

  describe("Если количество склонений меньше 4", () => {
    test("Если число от 10 до 20, всегда возвращается 2", () => {
      // Если число заканчивается на 1
      expect(russianPluralization(11, 3)).toBe(2)

      // Если число не заканчивается на 1
      expect(russianPluralization(12, 3)).toBe(2)
    })

    test("Если число не от 10 до 20, возвращается 1 или 2", () => {
      // Если число заканчивается на 1
      expect(russianPluralization(1, 3)).toBe(1)

      // Если число не заканчивается на 1
      expect(russianPluralization(2, 3)).toBe(2)
    })
  })

  describe("Если число не входит в промежуток от 10 до 20", () => {
    test("Если заканчивается на 1, возвращаем 1", () => {
      expect(russianPluralization(1, 4)).toBe(1)
    })

    test("Если число заканчивается на 2, 3, 4, возвращаем 2", () => {
      expect(russianPluralization(2, 4)).toBe(2)
      expect(russianPluralization(3, 4)).toBe(2)
      expect(russianPluralization(4, 4)).toBe(2)
    })

    test("Если заканчивается на 5-9, возвращаем 3", () => {
      expect(russianPluralization(7, 4)).toBe(3)
    })
  })
})
