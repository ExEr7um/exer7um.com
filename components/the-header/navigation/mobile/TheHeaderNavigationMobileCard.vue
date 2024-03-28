<script setup lang="ts">
const props = defineProps<{
  /** Ссылка навигации */
  routeName: string
}>()

const { t } = useI18n()
const localeRoute = useLocaleRoute()

const NuxtLink = resolveComponent("NuxtLink")

/** Полученный объект `route` для навигации */
const navigationRoute = localeRoute({
  name: toRefs(props).routeName.value,
})
</script>

<template>
  <HeadlessMenuItem
    :as="NuxtLink"
    class="w-full rounded px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
    exact-active-class="hover:bg-white dark:hover:bg-neutral-900 cursor-default"
    :to="navigationRoute"
  >
    {{ t(`pages.${routeName}`) }}
  </HeadlessMenuItem>
</template>
