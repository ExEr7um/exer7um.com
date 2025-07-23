<script setup lang="ts">
import * as nuxtUiLocales from "@nuxt/ui/locale"
import * as zodLocales from "zod/locales"
import { config } from "zod/mini"

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
  config(zodLocales[value]())
})
</script>

<template>
  <UApp :locale="nuxtUiLocales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#2563EB" />
    <NuxtLayout />
  </UApp>
</template>
