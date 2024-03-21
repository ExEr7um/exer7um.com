<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t("pages.index"),
  // TODO: Добавить описание страницы
})
</script>

<template>
  <main>
    <PersonalProjects :limit="3" />
  </main>
</template>
