<script setup lang="ts">
defineProps<{
  /** Описание страницы */
  description: string
  /** Заголовок страницы */
  title: string
}>()
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
