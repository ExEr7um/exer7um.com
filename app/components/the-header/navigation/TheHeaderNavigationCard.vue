<script setup lang="ts">
import type { RouteName } from "~/types/Utils"

const { routeName } = defineProps<{
  /** Ссылка навигации */
  routeName: RouteName
}>()

const localeRoute = useLocaleRoute()

/** Полученная ссылка навигации */
const navigationRoute = computed(() =>
  localeRoute({
    name: routeName,
  }),
)
</script>

<template>
  <NuxtLink
    class="relative flex justify-center leading-none transition-colors hover:text-blue-500"
    exact-active-class="cursor-default text-blue-600 after:absolute after:top-full after:mt-2 after:h-px after:w-6 after:bg-blue-600 hover:text-blue-600 dark:text-blue-500 after:dark:bg-blue-500 dark:hover:text-blue-500"
    :to="navigationRoute"
  >
    {{ $t(`pages.${routeName}`) }}
  </NuxtLink>
</template>
