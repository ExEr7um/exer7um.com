<template>
  <nav
    class="flex"
    :class="{
      'flex-col space-x-0 space-y-4': isVertical,
      'md:space-x-8': !isVertical,
    }"
  >
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      :class="{
        'text-white hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-100':
          isWhite,
        'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100':
          !isWhite,
        'px-4 py-1 md:p-0': !isVertical,
      }"
      :to="localePath(item.href)"
    >
      {{ item.title }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
