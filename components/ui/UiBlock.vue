<script setup lang="ts">
defineProps<{
  /** Заголовок блока */
  title?: string
}>()
</script>

<template>
  <section class="flex flex-col gap-y-[3.25rem]">
    <h2 v-if="title">{{ title }}</h2>
    <slot />
  </section>
</template>
