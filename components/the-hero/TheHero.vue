<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="flex items-center justify-between gap-x-8 py-8">
    <div class="flex max-w-[27rem] flex-col gap-y-8">
      <h1>{{ t("title") }}</h1>
      <p>{{ t("description") }}</p>
      <div class="mt-2 flex items-center gap-x-6">
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
