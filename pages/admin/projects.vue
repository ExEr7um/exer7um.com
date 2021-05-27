<template>
  <div class="container">
    <div class="flex justify-between items-end">
      <h2>Проекты</h2>
      <Button
        text="Новый"
        :icon="require('@/assets/icons/plus.svg')"
        :on-click="openPopup"
      />
    </div>
    <ProjectsTable
      :projects="$store.state.projects.projects"
      class="mt-6"
      @open-popup="popup = $event.popup"
    />
    <ProjectPopup
      v-if="Object.keys(popup).length !== 0"
      :popup="popup"
      @close-popup="popup = {}"
    />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      popup: {},
    }
  },
  head() {
    return {
      title: `${this.$t('pages.controlPanel')} — ${this.$t(
        'pages.admin.projects'
      )} | exer7um.github.io`,
    }
  },
  methods: {
    openPopup() {
      this.popup = {
        title: 'Новый проект',
        vuexCommand: 'projects/createProject',
      }
    },
  },
}
</script>
