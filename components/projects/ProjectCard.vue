<template>
  <div
    class="flex flex-col overflow-hidden rounded-md border dark:border-0 dark:bg-zinc-800"
  >
    <div
      class="flex h-40 min-h-[10rem] items-center justify-center border-b p-8 dark:border-0"
      :style="`background-color: ${project.color};`"
    >
      <img
        :src="project.logo"
        :alt="project[`${$i18n.locale}_title`]"
        class="max-h-full max-w-full select-none"
      />
    </div>
    <div class="flex h-full flex-col justify-between p-5">
      <div>
        <h4>{{ project[`${$i18n.locale}_title`] }}</h4>
        <p class="mt-3">{{ project[`${$i18n.locale}_description`] }}</p>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <span class="text-zinc-400">{{ project.year }}</span>
        <a
          :href="project.link"
          target="_blank"
          class="group inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >{{ $t('projects.card.view') }}
          <div
            class="ml-1 fill-current text-indigo-600 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300"
            v-html="require('~/assets/icons/arrow-right.svg?include')"
          ></div>
        </a>
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
