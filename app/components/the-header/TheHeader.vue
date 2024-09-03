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
  <header class="container sticky top-4 z-10">
    <div
      class="card flex h-20 items-center justify-between gap-x-2 bg-opacity-60 px-4 shadow backdrop-blur-lg md:pl-8"
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
