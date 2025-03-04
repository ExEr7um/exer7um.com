<script setup lang="ts">
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
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#2563EB" />
    <NuxtLayout />
  </div>
</template>
