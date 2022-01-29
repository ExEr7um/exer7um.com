<template>
  <div>
    <AdminSidebar />
    <main class="py-4 pl-64">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import nuxtStorage from 'nuxt-storage'

export default {
  middleware({ store, redirect }) {
    if (!nuxtStorage.localStorage.getData('user')) {
      return redirect('/admin/login')
    }
  },
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
