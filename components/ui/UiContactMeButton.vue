<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <NuxtLinkLocale class="button primary" to="/contact-me/">
    {{ t("buttonText") }}
  </NuxtLinkLocale>
</template>

<i18n lang="yaml">
en:
  buttonText: Contact me 👋🏻
ru:
  buttonText: Написать мне 👋🏻
</i18n>
