<template>
  <nav class="flex space-x-8">
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      class="
        text-gray-500
        hover:text-gray-900
        dark:text-gray-400
        dark:hover:text-gray-100
      "
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
  },
}
</script>
