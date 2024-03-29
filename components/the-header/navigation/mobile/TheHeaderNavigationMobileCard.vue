<script setup lang="ts">
const props = defineProps<{
  /** Ссылка навигации */
  routeName: string
}>()

const { t } = useI18n()
const localeRoute = useLocaleRoute()

/** Полученный объект `route` для навигации */
const navigationRoute = localeRoute({
  name: toRefs(props).routeName.value,
})
</script>

<template>
  <HeadlessMenuItem
    as="span"
    class="w-full cursor-pointer rounded px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
    @click="navigateTo(navigationRoute)"
  >
    {{ t(`pages.${routeName}`) }}
  </HeadlessMenuItem>
</template>
