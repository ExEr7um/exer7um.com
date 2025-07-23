<script setup lang="ts">
const { title } = usePageSeo("about")
</script>

<template>
  <main>
    <h1 class="-mb-8">{{ title }}</h1>
    <AboutMe hide-title />
  </main>
</template>
