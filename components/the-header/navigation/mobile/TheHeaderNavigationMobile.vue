<script setup lang="ts">
defineProps<{
  /** Навигация */
  navigation: string[]
}>()
</script>

<template>
  <HeadlessMenu v-auto-animate as="div" class="relative *:outline-none">
    <HeadlessMenuButton class="button tertiary squared">
      <Icon name="heroicons:bars-2" />
    </HeadlessMenuButton>
    <HeadlessMenuItems
      as="nav"
      class="absolute left-0 top-full mt-2 flex min-w-40 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 shadow dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <TheHeaderNavigationMobileCard
        v-for="routeName in navigation"
        :key="routeName"
        :route-name
      />
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>
