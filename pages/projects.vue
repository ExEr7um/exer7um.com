<template>
  <div class="container">
    <ProjectsList :projects="$store.state.projects.projects" class="mt-4" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('pages.projects')} | exer7um.github.io`,
    }
  },
}
</script>
