<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('projects/getProjects')
  },
}
</script>
