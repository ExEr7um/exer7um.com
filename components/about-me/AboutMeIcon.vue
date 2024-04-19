<script setup lang="ts">
export interface TechnologyIcon {
  /** Цвет текста технологии */
  color: string
  /** Иконка технологии */
  icon: string
  /** Ключ */
  key?: string
  /** Заголовок технологии */
  title: string
}

defineProps<{
  /** Иконка технологии */
  icon: TechnologyIcon
}>()
</script>

<template>
  <span
    class="inline-flex items-baseline gap-x-1.5 px-1"
    :style="{ color: icon.color }"
  >
    <Icon class="mb-1 mt-auto" :name="icon.icon" size="32" />
    <span class="font-medium">
      {{ icon.title }}
    </span>
  </span>
</template>
