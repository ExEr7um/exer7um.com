<script setup lang="ts">
const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <UiPopup
    :description="t('description')"
    status="success"
    :title="t('title')"
    @close="emit('close')"
  >
    <NuxtLinkLocale class="button primary mt-2 w-max" to="/">
      {{ t("return") }}
    </NuxtLinkLocale>
  </UiPopup>
</template>

<i18n lang="yaml">
en:
  description: I have already started working on your request and will get back to you shortly.
  return: Return to homepage
  title: Thank you for your message!
ru:
  description: Я уже начал работу над вашим запросом и обязательно свяжусь с вами в ближайшее время.
  return: Вернуться на главную
  title: Спасибо за ваше сообщение!
</i18n>
