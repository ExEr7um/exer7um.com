<script setup lang="ts">
import type { FetchError } from "ofetch"

defineProps<{
  /** Ошибка */
  error: FetchError | undefined
}>()

const emit = defineEmits<{ close: [] }>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <UiPopup
    :description="t('description')"
    status="error"
    :title="t('title')"
    @close="emit('close')"
  >
    <pre
      class="max-w-full overflow-x-auto rounded-lg border bg-neutral-50 p-3 text-xs sm:text-base dark:border-neutral-700 dark:bg-neutral-800"
      v-text="error"
    />
    <button
      class="button primary mt-2 w-max"
      type="button"
      @click="emit('close')"
    >
      {{ t("tryAgain") }}
    </button>
  </UiPopup>
</template>

<i18n lang="yaml">
en:
  description: Following error occurred while sending your message. Please try again.
  title: Message was not sent
  tryAgain: Try again
ru:
  description: При отправке вашего сообщения произошла следующая ошибка. Пожалуйста, попробуйте еще раз.
  title: Сообщение не отправлено
  tryAgain: Попробовать еще раз
</i18n>
