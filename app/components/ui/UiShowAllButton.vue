<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router"

defineProps<{
  /** Ссылка на страницу */
  to: RouteLocationRaw
}>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="flex items-center justify-center">
    <UButton :label="t('viewAll')" size="lg" :to variant="soft" />
  </div>
</template>

<i18n lang="yaml">
en:
  viewAll: View all
ru:
  viewAll: Смотреть все
</i18n>
