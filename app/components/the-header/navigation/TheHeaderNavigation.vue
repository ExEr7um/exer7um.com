<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const { navigation } = defineProps<{
  /** Навигация */
  navigation: NavigationMenuItem[]
}>()
</script>

<template>
  <UNavigationMenu :items="navigation" />
</template>
