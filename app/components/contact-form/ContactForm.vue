<script setup lang="ts">
import type { Message } from "~~/server/api/messages/index.post"

const { t } = useI18n({ useScope: "local" })

/** Тело запроса */
const requestBody = ref<Message>()

const { clear, execute, status } = await useFetch("/api/messages", {
  // Выставляем тело запроса
  body: requestBody,
  // Не вызываем функцию при загрузке страницы
  immediate: false,
  method: "POST",
  // Не следим за изменением параметров
  watch: false,
})

/**
 * Функция для отправки сообщения к API.
 *
 * @param event - событие отправки формы.
 */
async function submitForm(event: Event) {
  /** Форма */
  const form = event.target as HTMLFormElement

  /** Тело запроса для отправки */
  requestBody.value = Object.fromEntries(
    new FormData(form).entries()
  ) as unknown as Message

  // Вызываем функцию отправки сообщения
  await execute()
    .then(() => {
      // Сбрасываем данные формы
      form.reset()
    })
    // Выводим сообщение об ошибке, если она есть
    .catch((error) => alert(error))
}

// Фокусируемся на первом инпуте
useFirstInputFocus()
</script>

<template>
  <form class="flex flex-col gap-y-12" @submit.prevent="submitForm">
    <div class="grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
      <UiInput
        id="name"
        :label="t('name')"
        minlength="2"
        :placeholder="t('name')"
      />
      <UiInput
        id="email"
        :label="t('email')"
        placeholder="you@example.com"
        type="email"
      />
      <UiTextArea
        id="message"
        class="sm:col-span-2"
        :label="t('message.label')"
        :placeholder="t('message.placeholder')"
      />
    </div>
    <button class="button primary w-40" type="submit">
      <LazyIcon v-if="status === 'pending'" name="svg-spinners:270-ring" />
      <span v-else>{{ t("send") }}</span>
    </button>
    <LazyContactFormSuccess v-if="status === 'success'" @close="clear" />
  </form>
</template>

<i18n lang="yaml">
en:
  email: E-Mail
  message:
    label: Your message
    placeholder: Enter your message
  name: Your name
  send: Send
ru:
  email: Электронная почта
  message:
    label: Ваше сообщение
    placeholder: Введите ваше сообщение
  name: Ваше имя
  send: Отправить
</i18n>
