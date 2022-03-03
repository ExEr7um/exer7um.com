<template>
  <div
    class="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-zinc-500/30 backdrop-blur dark:bg-zinc-900/30"
  >
    <div
      class="flex flex-col items-center gap-y-6 rounded-xl bg-white px-6 py-12 dark:bg-zinc-700"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-700 dark:bg-green-800 dark:text-green-200"
      >
        ✓
      </div>
      <h3>{{ popup.title }}</h3>
      <p class="max-w-xs text-center">{{ popup.message }}</p>
      <Button :text="popup.button" href="/" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popup: {
      type: Object,
      default: null,
    },
  },
}
</script>
