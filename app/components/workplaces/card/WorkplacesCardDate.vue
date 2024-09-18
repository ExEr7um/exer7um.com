<script setup lang="ts">
import { format } from "date-fns"

const props = defineProps<{
  /** Дата карточки */
  date: Date | null | string | undefined
}>()

const { locale, t } = useI18n({ useScope: "local" })

/** Форматированная дата */
const formattedDate = computed(
  () =>
    props.date
      ? format(props.date, "LLLL yyyy", {
          // @ts-expect-error - в i18n нет типизации locale
          locale: locales[locale.value],
        }) // Выводим текущую дату в формате «январь 2024»
      : t("presentTime") // Если дата не передана, то выводим «Настоящее время»
)
</script>

<template>
  <time
    class="size-max rounded-md px-3 py-2 text-sm first-letter:capitalize md:text-base"
    :class="[
      date
        ? 'tag'
        : 'border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400',
    ]"
  >
    {{ formattedDate }}
  </time>
</template>

<i18n lang="yaml">
en:
  presentTime: Present time
ru:
  presentTime: Настоящее время
</i18n>
