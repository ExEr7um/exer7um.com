<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t("pages.about"),
  // TODO: Добавить описание страницы
})
</script>

<template>
  <main>
    <h1>{{ t("pages.about") }}</h1>
    <AboutMe hide-title />
  </main>
</template>
