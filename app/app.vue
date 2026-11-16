<script setup lang="ts">
import { en, ru } from "zod/locales"
import * as z from "zod/mini"

const zodLocales = { en, ru }

const { locale } = useI18n()
const i18nHead = useLocaleHead()

useHeadSafe(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: [...i18nHead.value.link, { href: "https://mastodon.social/@exer7um", rel: "me" }],
  meta: i18nHead.value.meta,
}))

useSeoMeta({ titleTemplate: `%s | ExEr7um` })

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
