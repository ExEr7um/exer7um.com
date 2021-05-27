<template>
  <div
    class="flex flex-col border rounded-md dark:border-gray-600 overflow-hidden"
  >
    <div
      class="
        flex
        items-center
        justify-center
        h-40
        px-8
        py-4
        border-b
        dark:border-gray-600
      "
      style="min-height: 10rem"
      :class="project.color"
    >
      <img
        :src="project.logo"
        :alt="project[`${$i18n.locale}_title`]"
        class="max-h-full max-w-full"
      />
    </div>
    <div class="p-5 flex flex-col justify-between h-full">
      <div>
        <h4>{{ project[`${$i18n.locale}_title`] }}</h4>
        <p class="mt-3">{{ project[`${$i18n.locale}_description`] }}</p>
      </div>
      <div class="flex mt-6 items-center justify-between">
        <span class="text-gray-400">{{ project.year }}</span>
        <a
          :href="project.link"
          target="_blank"
          class="
            text-indigo-600
            dark:text-indigo-400
            hover:text-indigo-800
            dark:hover:text-indigo-300
          "
          >{{ $t('projects.card.view') }} →</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
}
</script>
