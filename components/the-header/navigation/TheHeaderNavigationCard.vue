<script setup lang="ts">
const props = defineProps<{
  /** Ссылка навигации */
  routeName: string
}>()

const { t } = useI18n()
const localeRoute = useLocaleRoute()
</script>

<template>
  <NuxtLink
    class="relative flex justify-center leading-none transition-colors hover:text-blue-500"
    exact-active-class="cursor-default text-blue-600 after:absolute after:top-full after:mt-1.5 after:h-px after:w-6 after:bg-blue-600 hover:text-blue-600 dark:text-blue-500 after:dark:bg-blue-500 dark:hover:text-blue-500"
    :to="
      localeRoute({
        name: toRefs(props).routeName.value,
      })
    "
  >
    {{ t(`pages.${routeName}`) }}
  </NuxtLink>
</template>
