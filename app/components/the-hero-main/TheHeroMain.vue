<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section
    class="flex flex-col-reverse gap-y-12 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8"
  >
    <div class="flex max-w-md flex-col gap-y-3">
      <h1>{{ t("title") }}</h1>
      <p>{{ $t("descriptions.index") }}</p>
      <div class="mt-6 flex gap-x-3">
        <UiContactMeButton />
        <Social compact />
      </div>
    </div>
    <TheHeroMainCode />
  </section>
</template>

<i18n lang="yaml">
en:
  or: or
  title: 👋🏻 Hello!
ru:
  or: или
  title: 👋🏻 Привет!
</i18n>
