<template>
  <div class="flex space-x-4">
    <a
      v-for="icon in icons"
      :key="icon.title"
      target="_blank"
      :href="icon.href"
      class="bg-indigo-500 p-3 rounded-md flex items-center justify-center"
    >
      <img :src="icon.icon" :alt="icon.title" class="h-full filter invert" />
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
