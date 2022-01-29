<template>
  <div
    class="grid overflow-hidden rounded-md border dark:border-gray-600"
    :class="actions ? 'grid-cols-6' : 'grid-cols-5'"
  >
    <div
      class="flex h-full items-center justify-center border-r p-4 dark:border-gray-600"
      :style="`background-color: ${project.color};`"
    >
      <img
        :src="project.logo"
        :alt="project[`${$i18n.locale}_title`]"
        class="max-h-20 max-w-full"
      />
    </div>
    <div class="flex items-center p-4 text-gray-900 dark:text-gray-100">
      {{ project[`${$i18n.locale}_title`] }}
    </div>
    <div class="col-span-2 flex items-center p-4">
      <p class="text-gray-900 dark:text-gray-100">
        {{ project[`${$i18n.locale}_description`] }}
      </p>
    </div>
    <div class="flex items-center p-4 text-gray-900 dark:text-gray-100">
      {{ project.year }}
    </div>
    <div v-if="actions" class="flex items-center justify-end space-x-2 p-4">
      <Button
        :icon="require('@/assets/icons/pencil.svg?include')"
        button-type="secondary"
        :on-click="openPopup"
      />
      <Button
        :icon="require('@/assets/icons/trash.svg?include')"
        button-type="destructive"
        :on-click="deleteProject"
      />
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
    actions: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openPopup() {
      this.$emit('open-popup', {
        popup: {
          title: 'Изменение проекта',
          vuexCommand: 'projects/updateProject',
          info: this.project,
        },
      })
    },
    deleteProject() {
      this.$store.dispatch('projects/deleteProject', this.project._id)
    },
  },
}
</script>
