<script setup lang="ts">
import { en as nuxtUiEn, ru as nuxtUiRu } from "@nuxt/ui/locale"
import * as z from "zod/mini"

const nuxtUiLocales = { en: nuxtUiEn, ru: nuxtUiRu }
const zodLocales = { en: z.locales.en, ru: z.locales.ru }

const { locale } = useI18n()
const i18nHead = useLocaleHead()

useHeadSafe({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs!.lang },
  link: [
    ...(i18nHead.value.link || []),
    { href: "https://mastodon.social/@exer7um", rel: "me" },
  ],
  meta: [...(i18nHead.value.meta || [])],
})

useSeoMeta({ titleTemplate: `%s | ExEr7um` })

// Локализация ошибок Zod
watchImmediate(locale, (value) => {
  z.config(zodLocales[value]())
})
</script>

<template>
  <UApp :locale="nuxtUiLocales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#2563EB" />
    <NuxtLayout />
  </UApp>
</template>
