<script setup lang="ts">
import { format } from "date-fns"

const { date } = defineProps<{
  /** Дата карточки */
  date: Date | null | string | undefined
}>()

const { locale, t } = useI18n({ useScope: "local" })

/** Форматированная дата */
const formattedDate = computed(() =>
  date
    ? // Выводим текущую дату в формате «январь 2024»
      format(date, "LLLL yyyy", { locale: locales[locale.value] })
    : // Если дата не передана, то выводим «Настоящее время»
      t("presentTime"),
)
</script>

<template>
  <UBadge
    as="time"
    :color="date ? 'neutral' : 'primary'"
    :label="formattedDate"
    size="lg"
    variant="subtle"
  />
</template>

<i18n lang="yaml">
en:
  presentTime: Present time
ru:
  presentTime: Настоящее время
</i18n>
