<script setup lang="ts">
import type { RouteName } from "~/types/Utils"

defineProps<{
  /** Навигация */
  navigation: RouteName[]
}>()
</script>

<template>
  <nav class="flex gap-x-7">
    <TheHeaderNavigationCard
      v-for="routeName in navigation"
      :key="routeName"
      :route-name
    />
  </nav>
</template>
