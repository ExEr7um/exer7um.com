import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { config } from "@vue/test-utils"
import { createI18n } from "vue-i18n"

// НАСТРОЙКА I18N

/** Объект с настройками i18n */
const i18n = createI18n({
  locale: "ru", // По умолчанию выставляем русскую локализацию
  missing: (_, key) => key, // Если ключ не найден, возвращаем сам ключ
})

// Добавляем i18n в плагины
config.global.plugins.push(i18n)

// НАСТРОЙКА AUTO ANIMATE

// Добавляем Auto Animate в плагины
config.global.plugins.push(autoAnimatePlugin)
