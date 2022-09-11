<script setup lang="ts">
import { NavigationFailure } from "vue-router"
import { navigation } from "~~/store/navigation"

defineProps<{
  /** Является ли навигация вертикальной */
  isVertical?: boolean
  /** Является ли цвет текста в навигации белым */
  isWhite?: boolean
}>()

const emit = defineEmits<{
  /** Событие при клике на элемент навигации */
  (e: "navigate"): void
}>()

const { t } = useI18n()
const localePath = useLocalePath()

/**
 * Функция для навигации по ссылкам.
 *
 * При переходе по ссылке, эмитится событие `navigate`.
 *
 * @param navigate - Функция для перехода по ссылке
 * @param event - Событие навигации
 */
function navigateAndEmit(
  navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>,
  event: MouseEvent
): void {
  emit("navigate")
  navigate(event)
}
</script>

<template>
  <nav class="flex gap-y-4 gap-x-8" :class="{ 'flex-col': isVertical }">
    <NuxtLink
      v-for="link in navigation"
      :key="link.url"
      v-slot="{ navigate, href, isActive }"
      custom
      :to="localePath(link.url)"
    >
      <a
        class="transition-colors"
        :class="[
          isWhite
            ? isActive
              ? 'text-white'
              : 'text-white/50 hover:text-white dark:text-neutral-500'
            : isActive
            ? 'cursor-default'
            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100',
        ]"
        :href="href"
        @click="navigateAndEmit(navigate, $event)"
      >
        {{ t(link.title) }}
      </a>
    </NuxtLink>
    <LocaleSwitch />
  </nav>
</template>
