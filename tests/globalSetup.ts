/**
 * Данная функция выставляет для всех тестов единый часовой пояс.
 */
export default function setup() {
  process.env.TZ = "Europe/Moscow"
}
