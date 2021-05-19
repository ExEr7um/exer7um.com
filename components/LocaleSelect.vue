<template>
  <div class="flex items-center mr-6 divide-x divide-gray-500">
    <nuxt-link
      v-for="locale in locales"
      :key="locale"
      class="
        text-gray-500
        cursor-pointer
        hover:text-gray-900
        dark:hover:text-gray-100
        flex-grow
        px-2
      "
      :to="switchLocalePath(locale)"
      :class="{
        'text-gray-900 dark:text-gray-100': $i18n.locale == locale,
      }"
      >{{ locale.toUpperCase() }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    locales: {
      type: Array,
      default: null,
    },
  },
}
</script>
