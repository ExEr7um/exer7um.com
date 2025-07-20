<script setup lang="ts">
const { compact } = defineProps<{
  /** Является ли блок уменьшенным */
  compact?: boolean
}>()

/** Социальная сеть */
export interface SocialCard {
  /** Иконка социальной сети */
  icon: string
  /** `URL` социальной сети */
  to: string
}

/** Уменьшенный список социальных сетей */
const compactSocial = [
  { icon: "icon-park-outline:telegram", to: "https://t.me/exer7um" },
  { icon: "heroicons:at-symbol", to: "mailto:work@exer7um.com" },
] as const satisfies SocialCard[]

/** Социальные сети для общего списка */
const fullSocial = [
  { icon: "simple-icons:github", to: "https://github.com/ExEr7um" },
] as const satisfies SocialCard[]

/** Список социальных сетей */
const social = computed(() => {
  return [...compactSocial, ...(compact ? [] : fullSocial)]
})
</script>

<template>
  <div class="flex" :class="[compact ? 'gap-x-3' : 'gap-x-4']">
    <UButton
      v-for="{ icon, to } in social"
      :key="to"
      color="neutral"
      external
      :icon
      size="lg"
      square
      target="_blank"
      :to
      variant="subtle"
    />
  </div>
</template>
