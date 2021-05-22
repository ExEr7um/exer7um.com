<template>
  <div>
    <AdminSidebar />
    <main class="ml-64">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('projects/getProjects')
  },
}
</script>

<style lang="css">
body {
  @apply dark:bg-gray-800;
}
</style>
