import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { config } from "@vue/test-utils"
import { createI18n } from "vue-i18n"

/** Объект с настройками i18n */
const i18n = createI18n({
  locale: "ru", // По умолчанию выставляем русскую локализацию
  missing: (_, key) => key, // Если ключ не найден, возвращаем сам ключ
})

// Добавляем плагины
config.global.plugins.push(i18n, autoAnimatePlugin)
