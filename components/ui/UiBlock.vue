<script setup lang="ts">
defineProps<{
  /** Заголовок блока */
  title?: string
}>()
</script>

<template>
  <section class="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10">
    <h2 v-if="title">{{ title }}</h2>
    <slot />
  </section>
</template>
