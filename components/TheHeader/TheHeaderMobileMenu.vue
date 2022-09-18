<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div
    class="container relative z-30 flex flex-col gap-y-8 rounded-b-xl bg-white pt-2 pb-10 dark:bg-neutral-800"
  >
    <div class="flex flex-col gap-y-6">
      <h3>{{ t("header.mobileMenu.navigation") }}</h3>
      <Navigation :is-vertical="true" />
    </div>
    <div class="flex flex-col gap-y-4">
      <h3>{{ t("header.mobileMenu.changeLanguage") }}</h3>
      <LocaleSwitch class="-ml-2" />
    </div>
  </div>
</template>
