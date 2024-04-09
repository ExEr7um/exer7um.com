<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t("pages.contactMe"),
  // TODO: Добавить описание страницы
})
</script>

<template>
  <main class="max-w-2xl">
    <h1>{{ t("pages.contactMe") }}</h1>
    <ContactForm />
  </main>
</template>
