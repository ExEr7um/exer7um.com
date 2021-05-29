<template>
  <div
    class="
      fixed
      w-full
      h-full
      bg-opacity-30 bg-gray-500
      dark:bg-gray-900
      z-10
      flex
      items-center
      justify-center
      top-0
      left-0
      backdrop-filter backdrop-blur
    "
  >
    <div
      class="
        bg-white
        p-6
        rounded-xl
        dark:bg-gray-700
        flex
        items-center
        space-y-4
        flex-col
      "
    >
      <div
        class="
          flex
          items-center
          justify-center
          bg-green-100
          w-12
          h-12
          rounded-full
          text-green-700 text-xl
          dark:bg-green-800
          dark:text-green-200
        "
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
