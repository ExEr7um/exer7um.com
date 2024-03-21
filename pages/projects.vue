<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t("pages.projects"),
  // TODO: Добавить описание страницы
})
</script>

<template>
  <main>
    <h1>{{ t("pages.projects") }}</h1>
    <PersonalProjects />
  </main>
</template>
