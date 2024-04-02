<script setup lang="ts">
/** Цвета кнопок управления окном */
const buttonColors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
] as const satisfies string[]

/** Код для вывода */
const code = `<section class="flex items-center justify-between gap-x-8 py-8">
  <div class="flex max-w-[27rem] flex-col gap-y-8">
    <h1>👋🏻 Привет!</h1>
    <p>
      Я — фронтенд разработчик из Москвы.
      Люблю Vue, чистый код и красивый дизайн.
    </p>
    <UiContactMeButton />
  </div>
  <TheHeroCode />
</section>
` as const
</script>

<template>
  <div class="w-max rounded-2xl bg-[#011627] px-6 pb-6 text-sm shadow-lg">
    <div class="flex h-12 items-center gap-x-2">
      <div
        v-for="color in buttonColors"
        :key="color"
        class="size-3 rounded-full"
        :class="color"
        data-test-id="windowButton"
      />
      <code class="ml-auto">TheHero.vue</code>
    </div>
    <Shiki :code />
  </div>
</template>
