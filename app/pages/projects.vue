<script setup lang="ts">
const { description, title } = usePageSeo("projects")
</script>

<template>
  <main>
    <UiHero :description :title />
    <Projects hide-title />
    <PersonalProjects />
  </main>
</template>
