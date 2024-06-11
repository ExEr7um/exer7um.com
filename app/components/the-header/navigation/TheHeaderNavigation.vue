<script setup lang="ts">
defineProps<{
  /** Навигация */
  navigation: string[]
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
