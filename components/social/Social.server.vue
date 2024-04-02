<script setup lang="ts">
import type { SocialCard } from "./SocialCard.server.vue"

const props = defineProps<{
  /** Является ли блок уменьшенным */
  compact?: boolean
}>()

/** Уменьшенный список социальных сетей */
const compactSocial = [
  {
    icon: "icon-park:telegram",
    url: "https://t.me/exer7um",
  },
  {
    icon: "heroicons:at-symbol",
    url: "mailto:work@exer7um.com",
  },
] as const satisfies SocialCard[]

/** Социальные сети для общего списка */
const fullSocial = [
  {
    icon: "simple-icons:github",
    url: "https://github.com/ExEr7um",
  },
] as const satisfies SocialCard[]

/** Список социальных сетей */
const social = computed(() => {
  return [...compactSocial, ...(props.compact ? [] : fullSocial)]
})
</script>

<template>
  <div class="flex" :class="[compact ? 'gap-x-2' : 'gap-x-4']">
    <SocialCard
      v-for="socialCard in social"
      :key="socialCard.url"
      :social-card
    />
  </div>
</template>
