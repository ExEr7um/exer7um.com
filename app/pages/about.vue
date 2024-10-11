<script setup lang="ts">
const { title } = usePageSeo("about")
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <AboutMe hide-title />
  </main>
</template>
