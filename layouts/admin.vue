<template>
  <div>
    <AdminSidebar />
    <main class="pl-64 py-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('projects/load')
    this.$store.dispatch('messages/load')
  },
}
</script>

<style lang="css">
body {
  @apply dark:bg-gray-800;
}
</style>
