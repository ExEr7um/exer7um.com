<template>
  <div class="flex space-x-4">
    <a
      v-for="icon in icons"
      :key="icon.title"
      target="_blank"
      :href="icon.href"
      class="flex items-center justify-center rounded-md bg-indigo-500 p-3 hover:bg-indigo-400 dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      <div
        :alt="icon.title"
        class="flex h-full w-full select-none items-center justify-center fill-current text-white"
        v-html="icon.icon"
      ></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array,
      default: null,
    },
  },
}
</script>
