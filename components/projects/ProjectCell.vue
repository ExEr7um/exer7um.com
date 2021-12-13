<template>
  <div
    class="grid border rounded-md dark:border-gray-600 overflow-hidden"
    :class="actions ? 'grid-cols-6' : 'grid-cols-5'"
  >
    <div
      class="p-4 flex items-center justify-center h-full border-r dark:border-gray-600"
      :class="project.color"
    >
      <img
        :src="project.logo"
        :alt="project[`${$i18n.locale}_title`]"
        class="max-h-20 max-w-full"
      />
    </div>
    <div class="p-4 flex items-center text-gray-900 dark:text-gray-100">
      {{ project[`${$i18n.locale}_title`] }}
    </div>
    <div class="col-span-2 p-4 flex items-center">
      <p class="text-gray-900 dark:text-gray-100">
        {{ project[`${$i18n.locale}_description`] }}
      </p>
    </div>
    <div class="p-4 flex items-center text-gray-900 dark:text-gray-100">
      {{ project.year }}
    </div>
    <div v-if="actions" class="p-4 flex items-center justify-end space-x-2">
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
