<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"

defineProps<{
  /** Навигация */
  navigation: DropdownMenuItem[]
}>()
</script>

<template>
  <UDropdownMenu :items="navigation" size="lg">
    <UButton color="neutral" icon="heroicons:bars-2" size="lg" variant="soft" />
  </UDropdownMenu>
</template>
