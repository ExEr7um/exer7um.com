<script setup lang="ts">
usePageSeo("projects")
</script>

<template>
  <main>
    <h1>{{ $t("pages.projects") }}</h1>
    <Projects hide-title />
    <PersonalProjects />
  </main>
</template>
