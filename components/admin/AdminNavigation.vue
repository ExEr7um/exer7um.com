<template>
  <div class="flex flex-col space-y-3 mt-12">
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      :to="localePath(item.href)"
      class="
        flex
        items-center
        justify-center
        py-2
        px-4
        w-max
        rounded-md
        hover:text-gray-700
        dark:text-white
        dark:hover:text-gray-300
      "
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
  @apply bg-gray-100 font-medium cursor-default hover:text-black dark:bg-gray-700 dark:hover:text-gray-300;
}
</style>
