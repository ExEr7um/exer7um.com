<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

import type { RouteName } from "~/types/Utils"

const { t } = useI18n()
const localePath = useLocalePath()

/** Иконки навигации */
const navigationIcons = {
  index: "lucide:house",
  // eslint-disable-next-line perfectionist/sort-objects
  experience: "lucide:briefcase",
  projects: "lucide:layout-grid",
  // eslint-disable-next-line perfectionist/sort-objects
  about: "lucide:user",
} as const satisfies Partial<Record<RouteName, string>>

/** Список навигации */
const navigation = computed(() => {
  return Object.entries(navigationIcons).map(([routeName, icon]) => {
    return {
      icon,
      label: t(`pages.${routeName}`),
      to: localePath(routeName as RouteName),
    } satisfies NavigationMenuItem
  })
})
</script>

<template>
  <header class="sticky top-4 z-10 container">
    <div
      class="flex items-center justify-between gap-x-2 rounded-xl border border-default bg-white/60 p-2 shadow backdrop-blur-lg md:rounded-2xl md:px-4 dark:bg-neutral-900/60"
    >
      <UNavigationMenu class="hidden md:flex" :items="navigation" />
      <TheHeaderNavigationMobile class="md:hidden" :navigation />
      <div class="flex justify-between gap-x-2">
        <TheHeaderLocaleSwitch />
        <UiContactMeButton />
      </div>
    </div>
  </header>
</template>
