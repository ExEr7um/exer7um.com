<script setup lang="ts">
import { en, ru } from "zod/locales"
import * as z from "zod/mini"

const zodLocales = { en, ru }

const { locale } = useI18n()

useHeadSafe({ link: [{ href: "https://mastodon.social/@exer7um", rel: "me" }] })

// Локализация ошибок Zod
watchImmediate(locale, (value) => {
  z.config(zodLocales[value]())
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#2563EB" />
    <NuxtLayout />
  </UApp>
</template>
