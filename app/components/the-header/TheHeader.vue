<script setup lang="ts">
import type { RouteName } from "~/types/Utils"

/** Список навигации */
const navigation = [
  "index",
  "experience",
  "projects",
  "about",
] as const satisfies RouteName[]
</script>

<template>
  <header class="sticky top-4 z-10 container">
    <div
      class="default-border flex items-center justify-between gap-x-2 rounded-2xl bg-white/60 px-4 py-2 shadow backdrop-blur-lg dark:bg-neutral-900/60"
    >
      <TheHeaderNavigation class="hidden md:flex" :navigation />
      <TheHeaderNavigationMobile class="md:hidden" :navigation />
      <div class="flex grow justify-between gap-x-2 sm:grow-0">
        <TheHeaderLocaleSwitch />
        <UiContactMeButton />
      </div>
    </div>
  </header>
</template>
