<template>
  <div class="flex space-x-4">
    <a
      v-for="icon in icons"
      :key="icon.title"
      target="_blank"
      :href="icon.href"
      class="bg-indigo-500 p-3 rounded-md flex items-center justify-center hover:bg-indigo-400 dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      <div
        :alt="icon.title"
        class="w-full h-full fill-current text-white flex items-center justify-center select-none"
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
