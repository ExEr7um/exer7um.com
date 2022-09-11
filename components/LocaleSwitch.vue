<script setup lang="ts">
const { locale, localeCodes } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div
    class="mr-6 flex items-center divide-x divide-neutral-300 dark:divide-neutral-500"
  >
    <NuxtLink
      v-for="code in localeCodes"
      :key="code"
      class="cursor-pointer px-2 uppercase transition-colors"
      :class="[
        locale === code
          ? 'text-neutral-900 dark:text-neutral-100'
          : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100',
      ]"
      :to="switchLocalePath(code)"
    >
      {{ code }}
    </NuxtLink>
  </div>
</template>
