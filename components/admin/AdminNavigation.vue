<template>
  <div class="mt-12 flex flex-col space-y-3">
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      :to="localePath(item.href)"
      class="flex w-max items-center justify-center rounded-md py-2 px-4 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
      >{{ item.title }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply cursor-default bg-zinc-100 font-medium hover:text-black dark:bg-zinc-700 dark:hover:text-zinc-300;
}
</style>
