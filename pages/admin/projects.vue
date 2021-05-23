<template>
  <div class="container">
    <h2>Проекты</h2>
    <ProjectsTable :projects="$store.state.projects.projects" class="mt-6" />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: `${this.$t('pages.controlPanel')} — ${this.$t(
        'pages.admin.projects'
      )} | exer7um.github.io`,
    }
  },
}
</script>
