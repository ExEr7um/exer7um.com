<script setup lang="ts">
/** Список навигации */
const navigation = [
  "index",
  "projects",
  "experience",
  "about",
] as const satisfies string[]
</script>

<template>
  <header class="container sticky top-4">
    <div
      class="card flex h-20 items-center justify-between bg-opacity-30 px-4 shadow backdrop-blur-lg md:pl-8"
    >
      <TheHeaderNavigation class="hidden md:flex" :navigation />
      <TheHeaderNavigationMobile class="md:hidden" :navigation />
      <UiContactMeButton />
    </div>
  </header>
</template>
