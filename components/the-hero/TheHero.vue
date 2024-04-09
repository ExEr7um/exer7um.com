<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section
    class="flex flex-col-reverse gap-y-12 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8"
  >
    <div class="flex max-w-[27rem] flex-col gap-y-3">
      <h1>{{ t("title") }}</h1>
      <p>{{ t("description") }}</p>
      <div class="mt-8 flex items-center gap-x-4 sm:gap-x-6">
        <UiContactMeButton />
        <p>{{ t("or") }}</p>
        <Social compact />
      </div>
    </div>
    <TheHeroCode />
  </section>
</template>

<i18n lang="json">
{
  "ru": {
    "title": "👋🏻 Привет!",
    "description": "Я — фронтенд разработчик из Москвы. Люблю Vue, чистый код и красивый дизайн.",
    "or": "или"
  },
  "en": {
    "title": "👋🏻 Hello!",
    "description": "I'm a frontend developer from Moscow. I love Vue, clean code, and beautiful design.",
    "or": "or"
  }
}
</i18n>
