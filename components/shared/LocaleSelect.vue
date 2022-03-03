<template>
  <div class="mr-6 flex items-center divide-x divide-zinc-500">
    <nuxt-link
      v-for="locale in locales"
      :key="locale"
      class="cursor-pointer px-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      :to="switchLocalePath(locale)"
      :class="{
        '!text-zinc-900 dark:!text-zinc-100': $i18n.locale == locale,
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
