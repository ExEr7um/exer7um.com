<script setup lang="ts">
import type { RouteName } from "~/types/Utils"

const { routeName } = defineProps<{
  /** Ссылка навигации */
  routeName: RouteName
}>()

const localeRoute = useLocaleRoute()

/** Полученная ссылка навигации */
const navigationRoute = computed(() => localeRoute({ name: routeName }))
</script>

<template>
  <HeadlessMenuItem
    as="span"
    class="w-full cursor-pointer rounded px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
    @click="navigateTo(navigationRoute)"
  >
    {{ $t(`pages.${routeName}`) }}
  </HeadlessMenuItem>
</template>
