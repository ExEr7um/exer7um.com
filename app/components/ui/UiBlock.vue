<script setup lang="ts">
defineProps<{
  /** Скрыть ли заголовок блока */
  hideTitle?: boolean
  /** Подзаголовок блока */
  subTitle?: string
  /** Заголовок блока */
  title: string
}>()
</script>

<template>
  <section class="flex scroll-mt-32 flex-col gap-y-3 sm:gap-y-4 lg:gap-y-6">
    <div
      v-if="!hideTitle"
      class="flex flex-col gap-y-1 sm:flex-row sm:items-baseline sm:gap-x-4"
    >
      <h2>{{ title }}</h2>
      <h3 v-if="subTitle" class="text-neutral-400 dark:text-neutral-600">
        {{ subTitle }}
      </h3>
    </div>
    <slot />
  </section>
</template>
