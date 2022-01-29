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
    this.$store.dispatch('projects/load')
  },
}
</script>

<style lang="css">
* {
  @apply transition;
}

body {
  @apply dark:bg-gray-800;
}

h1 {
  @apply text-4xl font-medium dark:text-white;
}

h2 {
  @apply text-2xl font-medium dark:text-white;
}

h3 {
  @apply text-xl font-medium dark:text-white;
}

h4 {
  @apply text-lg font-medium dark:text-white;
}

p {
  @apply leading-loose text-gray-500 dark:text-gray-400;
}
</style>
