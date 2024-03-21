<script setup lang="ts">
defineProps<{
  /** Заголовок блока */
  title: string
}>()
</script>

<template>
  <div class="flex flex-col gap-y-[3.25rem]">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>
