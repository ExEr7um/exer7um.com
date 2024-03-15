<script setup lang="ts">
const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})

useHeadSafe({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

useSeoMeta({
  titleTemplate: `%s | ExEr7um`,
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#2563EB" />
    <NuxtLayout />
  </div>
</template>
