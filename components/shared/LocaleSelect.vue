<template>
  <div class="mr-6 flex items-center divide-x divide-zinc-500">
    <nuxt-link
      v-for="{ code } in $i18n.locales"
      :key="code"
      class="cursor-pointer px-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      :to="switchLocalePath(code)"
      :class="{
        '!text-zinc-900 dark:!text-zinc-100': $i18n.locale == code,
      }"
      >{{ code.toUpperCase() }}</nuxt-link
    >
  </div>
</template>

<script>
export default {}
</script>
