<template>
  <component
    :is="type"
    :to="localePath(href)"
    class="flex items-center justify-center border rounded-md py-2 px-4 w-max space-x-2"
    :class="buttonClass"
    @click="onClick"
  >
    <div
      v-if="icon"
      class="max-h-4 w-full h-full fill-current flex items-center justify-center"
      :class="{
        'text-white': buttonType === 'primary',
        'text-black dark:text-white': buttonType === 'secondary',
        'text-red-500 dark:text-red-400': buttonType === 'destructive',
      }"
      v-html="icon"
    ></div>
    <span v-if="text">{{ text }}</span>
  </component>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => null,
    },
    text: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    buttonType: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    type() {
      if (this.href) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    },
    buttonClass() {
      return {
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600':
          this.buttonType === 'primary',
        'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700':
          this.buttonType === 'secondary',
        'text-red-700 hover:bg-gray-50 dark:text-red-300 dark:border-gray-600 dark:hover:bg-gray-700':
          this.buttonType === 'destructive',
      }
    },
  },
}
</script>
