<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"

defineProps<{
  /** Навигация */
  navigation: DropdownMenuItem[]
}>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <UDropdownMenu :items="navigation" size="lg">
    <UButton
      :aria-label="t('menu')"
      color="neutral"
      icon="heroicons:bars-2"
      size="lg"
      variant="soft"
    />
  </UDropdownMenu>
</template>

<i18n lang="yaml">
en:
  menu: Navigation menu
ru:
  menu: Меню навигации
</i18n>
