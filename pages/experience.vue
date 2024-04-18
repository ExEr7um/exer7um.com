<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t("pages.experience"),
  // TODO: Добавить описание страницы
})
</script>

<template>
  <main>
    <h1>{{ t("pages.experience") }}</h1>
    <Workplaces hide-title />
  </main>
</template>
