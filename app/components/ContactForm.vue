<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
const toast = useToast()

const state = shallowReactive<MessageSchema>({ email: "", message: "", name: "" })

/**
 * Функция для отправки сообщения к API.
 */
async function submitForm() {
  try {
    await $fetch("/api/messages", { body: state, method: "POST" })
  } catch {
    toast.add({ color: "error", description: t("error.description"), title: t("error.title") })

    return
  }

  // Сбрасываем данные формы
  state.email = ""
  state.message = ""
  state.name = ""

  toast.add({ color: "success", description: t("success.description"), title: t("success.title") })
}

// Фокусируемся на первом инпуте
useFirstInputFocus()
</script>

<template>
  <UForm
    class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2"
    :schema="messageSchema"
    :state
    @submit="submitForm"
  >
    <UFormField :label="t('name')" name="name" required>
      <UInput
        id="name"
        v-model="state.name"
        class="w-full"
        :placeholder="t('name')"
        size="xl"
        variant="subtle"
      />
    </UFormField>
    <UFormField :label="t('email')" name="email" required>
      <UInput
        id="email"
        v-model="state.email"
        class="w-full"
        placeholder="you@example.com"
        size="xl"
        type="email"
        variant="subtle"
      />
    </UFormField>
    <UFormField class="sm:col-span-2" :label="t('message.label')" name="message" required>
      <UTextarea
        id="message"
        v-model="state.message"
        autoresize
        class="w-full"
        :placeholder="t('message.placeholder')"
        :rows="4"
        size="xl"
        variant="subtle"
      />
    </UFormField>
    <UButton class="mt-2 w-max" :label="t('send')" loading-auto size="lg" type="submit" />
  </UForm>
</template>

<i18n lang="yaml">
en:
  email: E-Mail
  error:
    description: Error occurred while sending your message. Please try again.
    title: Message was not sent
  message:
    label: Your message
    placeholder: Enter your message
  name: Your name
  send: Send
  success:
    description: I have already started working on your request and will get back to you shortly.
    title: Thank you for your message!
ru:
  email: Электронная почта
  error:
    description: При отправке вашего сообщения произошла ошибка. Пожалуйста, попробуйте еще раз.
    title: Сообщение не отправлено
  message:
    label: Ваше сообщение
    placeholder: Введите ваше сообщение
  name: Ваше имя
  send: Отправить
  success:
    description: Я уже начал работу над вашим запросом и обязательно свяжусь с вами в ближайшее время.
    title: Спасибо за ваше сообщение!
</i18n>
