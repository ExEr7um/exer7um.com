<template>
  <div class="mr-6 flex items-center divide-x divide-gray-500">
    <nuxt-link
      v-for="locale in locales"
      :key="locale"
      class="cursor-pointer px-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      :to="switchLocalePath(locale)"
      :class="{
        '!text-gray-900 dark:!text-gray-100': $i18n.locale == locale,
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
