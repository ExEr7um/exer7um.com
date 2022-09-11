<script setup lang="ts">
const { locale, localeCodes } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="mr-6 flex items-center divide-x divide-zinc-500">
    <NuxtLink
      v-for="code in localeCodes"
      :key="code"
      class="cursor-pointer px-2 uppercase transition-colors"
      :class="[
        locale === code
          ? 'text-zinc-900 dark:text-zinc-100'
          : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100',
      ]"
      :to="switchLocalePath(code)"
    >
      {{ code }}
    </NuxtLink>
  </div>
</template>
