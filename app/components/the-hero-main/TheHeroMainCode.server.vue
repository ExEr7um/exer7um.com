<script setup lang="ts">
/** Цвета кнопок управления окном */
const buttonColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"] as const satisfies string[]

/** Код для вывода */
const code = `<section class="flex items-center justify-between gap-x-8 py-8">
  <div class="flex max-w-md flex-col gap-y-8">
    <h1>👋🏻 Привет!</h1>
    <p>
      Меня зовут Василий, я фронтенд-разработчик из
      Москвы. Люблю Vue, чистый код и красивый дизайн.
    </p>
    <UiContactMeButton />
  </div>
  <TheHeroMainCode />
</section>
` as const
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-2xl bg-[#011627] px-4 pb-4 text-[.625rem] shadow-lg sm:px-6 sm:pb-6 sm:text-xs md:text-sm lg:w-max lg:text-xs xl:text-sm"
  >
    <div class="flex h-10 items-center gap-x-2 sm:h-12">
      <div
        v-for="color in buttonColors"
        :key="color"
        class="size-2.5 rounded-full sm:size-3"
        :class="color"
        data-testid="windowButton"
      />
      <code class="ml-auto">TheHero.vue</code>
    </div>
    <Shiki :code />
  </div>
</template>
