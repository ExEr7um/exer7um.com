<script setup lang="ts">
import type { RouteName } from "~/types/Utils"

const { navigation } = defineProps<{
  /** Навигация */
  navigation: RouteName[]
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const icons = {
  about: "heroicons:user",
  "contact-me": "heroicons:envelope",
  experience: "heroicons:briefcase",
  index: "heroicons:home",
  projects: "heroicons:squares-2x2",
} as const satisfies Record<RouteName, string>

const items = computed(() => {
  return navigation.map((routeName) => {
    return {
      icon: icons[routeName],
      label: t(`pages.${routeName}`),
      to: localePath(routeName),
    }
  })
})
</script>

<template>
  <UNavigationMenu :items />
</template>
