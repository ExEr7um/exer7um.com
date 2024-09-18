<script setup lang="ts">
defineProps<{
  /** Подзаголовок блока */
  subTitle?: string
  /** Заголовок блока */
  title?: string
}>()
</script>

<template>
  <section class="flex scroll-mt-32 flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10">
    <div class="flex items-baseline gap-x-4">
      <h2 v-if="title">{{ title }}</h2>
      <h3 v-if="subTitle" class="text-neutral-400 dark:text-neutral-600">
        {{ subTitle }}
      </h3>
    </div>
    <slot />
  </section>
</template>
