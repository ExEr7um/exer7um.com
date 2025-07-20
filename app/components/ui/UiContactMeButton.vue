<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })

const localePath = useLocalePath()
</script>

<template>
  <UButton :label="t('buttonText')" size="lg" :to="localePath('contact-me')">
    <template #trailing>✍🏻</template>
  </UButton>
</template>

<i18n lang="yaml">
en:
  buttonText: Contact me
ru:
  buttonText: Написать мне
</i18n>
