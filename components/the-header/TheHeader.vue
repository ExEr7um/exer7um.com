<script setup lang="ts">
/** Список навигации */
const navigation = [
  "index",
  "experience",
  "projects",
  "about",
] as const satisfies string[]
</script>

<template>
  <header class="container sticky top-4">
    <div
      class="card flex h-20 items-center justify-between gap-x-2 bg-opacity-30 px-4 shadow backdrop-blur-lg md:pl-8"
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
