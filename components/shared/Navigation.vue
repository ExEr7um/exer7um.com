<template>
  <nav
    class="flex"
    :class="isVertical ? 'flex-col gap-x-0 gap-y-4' : 'md:gap-x-8'"
  >
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      class=""
      :class="[
        isWhite
          ? 'text-white hover:text-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-100'
          : 'not-white text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
        { 'px-4 py-1 md:p-0': !isVertical },
      ]"
      :to="localePath(item.href)"
      @click.native="$emit('close-menu')"
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

<style scoped>
.nuxt-link-exact-active.not-white {
  @apply text-zinc-900 dark:text-zinc-100;
}
</style>
